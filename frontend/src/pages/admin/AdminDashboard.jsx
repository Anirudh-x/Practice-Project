import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaPlus, FaEdit, FaTrash, FaBook, FaFolderOpen, FaDollarSign, FaClock } from "react-icons/fa";

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/admin/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleDelete = async (id, title) => {
    if (window.confirm(`Are you sure you want to delete the course "${title}"?`)) {
      try {
        await axios.delete(`http://localhost:3000/admin/courses/${id}`);
        alert("Course deleted successfully!");
        fetchCourses();
      } catch (error) {
        console.error("Error deleting course:", error);
        alert("Failed to delete the course.");
      }
    }
  };

  const getStats = () => {
    const total = courses.length;
    const avgPrice = total > 0 ? (courses.reduce((acc, c) => acc + (parseFloat(c.price) || 0), 0) / total).toFixed(2) : 0;
    const categories = new Set(courses.map(c => c.category)).size;
    return { total, avgPrice, categories };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-(--color-bg) text-(--color-text) transition-colors duration-300 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-(--color-primary-light)">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Admin <span className="text-(--color-primary)">Dashboard</span>
            </h1>
            <p className="text-(--color-text-muted) mt-2">Manage your e-learning course catalog and content.</p>
          </div>
          <Link
            to="/admin/create"
            className="flex items-center gap-2 px-6 py-3 bg-(--color-primary) text-white font-semibold rounded-full shadow-lg hover:opacity-90 hover:scale-105 transition-all"
          >
            <FaPlus size={14} /> Create New Course
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 bg-(--color-primary-light) border border-(--color-primary) rounded-2xl flex items-center justify-between shadow-sm">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-(--color-text-muted)">Total Courses</p>
              <h3 className="text-3xl font-extrabold mt-1">{stats.total}</h3>
            </div>
            <div className="p-4 bg-(--color-primary) text-white rounded-full">
              <FaBook size={20} />
            </div>
          </div>

          <div className="p-6 bg-(--color-primary-light) border border-(--color-primary) rounded-2xl flex items-center justify-between shadow-sm">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-(--color-text-muted)">Categories</p>
              <h3 className="text-3xl font-extrabold mt-1">{stats.categories}</h3>
            </div>
            <div className="p-4 bg-(--color-primary) text-white rounded-full">
              <FaFolderOpen size={20} />
            </div>
          </div>

          <div className="p-6 bg-(--color-primary-light) border border-(--color-primary) rounded-2xl flex items-center justify-between shadow-sm">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-(--color-text-muted)">Avg Price</p>
              <h3 className="text-3xl font-extrabold mt-1">${stats.avgPrice}</h3>
            </div>
            <div className="p-4 bg-(--color-primary) text-white rounded-full">
              <FaDollarSign size={20} />
            </div>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-(--color-bg) border border-(--color-primary-light) shadow-xl rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-(--color-primary-light) flex justify-between items-center">
            <h2 className="text-xl font-bold">Course Catalog</h2>
            <span className="px-3 py-1 bg-(--color-primary-light) text-(--color-primary) text-xs font-semibold rounded-full">
              {courses.length} active
            </span>
          </div>

          {loading ? (
            <div className="py-20 text-center text-(--color-text-muted)">Loading courses...</div>
          ) : courses.length === 0 ? (
            <div className="py-20 text-center text-(--color-text-muted)">
              No courses found. Click "Create New Course" to add your first course!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-(--color-primary-light) text-sm font-bold">
                    <th className="p-4 pl-6">Title</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Level</th>
                    <th className="p-4">Duration</th>
                    <th className="p-4">Price</th>
                    <th className="p-4 text-center pr-6">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-(--color-primary-light)">
                  {courses.map((course) => (
                    <tr key={course._id} className="hover:bg-(--color-primary-light) transition-colors">
                      <td className="p-4 pl-6 font-semibold">{course.title}</td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-(--color-primary-light) text-(--color-primary) text-xs font-semibold rounded-full border border-(--color-primary)/20">
                          {course.category}
                        </span>
                      </td>
                      <td className="p-4 capitalize text-sm">{course.level}</td>
                      <td className="p-4 text-sm flex items-center gap-1.5 mt-1 border-none">
                        <FaClock className="text-(--color-text-muted)" size={12} />
                        {course.duration}
                      </td>
                      <td className="p-4 font-bold">${course.price}</td>
                      <td className="p-4 text-center pr-6">
                        <div className="flex justify-center gap-3">
                          <button
                            onClick={() => navigate(`/admin/edit/${course._id}`)}
                            className="p-2 hover:bg-(--color-primary) hover:text-white rounded-lg transition-all"
                            title="Edit course"
                          >
                            <FaEdit size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(course._id, course.title)}
                            className="p-2 hover:bg-red-500 hover:text-white rounded-lg transition-all text-red-500"
                            title="Delete course"
                          >
                            <FaTrash size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
