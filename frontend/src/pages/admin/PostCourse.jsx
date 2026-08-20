import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaBookOpen, FaSave, FaPlus } from "react-icons/fa";

const PostCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      const fetchCourseData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/courses`);
          const course = response.data.find((c) => c._id === id);
          if (course) {
            setTitle(course.title || "");
            setCategory(course.category || "");
            setLevel(course.level || "");
            setPrice(course.price || "");
            setDuration(course.duration || "");
          } else {
            alert("Course not found");
            navigate("/admin");
          }
        } catch (error) {
          console.error("Error fetching course:", error);
          alert("Failed to fetch course details");
        } finally {
          setLoading(false);
        }
      };
      fetchCourseData();
    }
  }, [id, isEditMode, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const courseData = {
      title,
      category,
      level,
      price,
      duration,
    };

    try {
      if (isEditMode) {
        await axios.put(`${import.meta.env.VITE_API_URL}/admin/courses/${id}`, courseData);
        alert("Course updated successfully!");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/admin/courses`, courseData);
        alert("Course created successfully!");
      }
      navigate("/admin");
    } catch (error) {
      console.error("Error saving course:", error);
      alert("An error occurred while saving the course.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-(--color-bg) text-(--color-text) transition-colors duration-300 p-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link
          to="/admin"
          className="inline-flex items-center gap-2 text-(--color-text-muted) hover:text-(--color-primary) transition mb-6"
        >
          <FaArrowLeft size={14} /> Back to Dashboard
        </Link>

        {/* Card Container */}
        <div className="bg-(--color-bg) border border-(--color-primary-light) shadow-2xl rounded-3xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-(--color-primary) text-white rounded-2xl">
              <FaBookOpen size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">
                {isEditMode ? "Edit" : "Create"} <span className="text-(--color-primary)">Course</span>
              </h1>
              <p className="text-(--color-text-muted) mt-1">
                {isEditMode ? "Modify existing course details." : "Add a new course to your curriculum catalog."}
              </p>
            </div>
          </div>

          {loading ? (
            <div className="py-20 text-center text-(--color-text-muted)">Loading course data...</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="title">
                  Course Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="e.g. Introduction to Modern Web Development"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 bg-(--color-bg) border border-(--color-primary-light) rounded-xl focus:outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 transition"
                  required
                />
              </div>

              {/* Grid (Category & Level) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="category">
                    Category
                  </label>
                  <input
                    type="text"
                    id="category"
                    placeholder="e.g. Programming, Design, Business"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-(--color-bg) border border-(--color-primary-light) rounded-xl focus:outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 transition"
                    required
                  />
                </div>

                {/* Level */}
                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="level">
                    Difficulty Level
                  </label>
                  <select
                    id="level"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full px-4 py-3 bg-(--color-bg) border border-(--color-primary-light) rounded-xl focus:outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 transition capitalize"
                    required
                  >
                    <option value="" disabled>Select Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>

              {/* Grid (Price & Duration) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Price */}
                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="price">
                    Price (USD)
                  </label>
                  <input
                    type="number"
                    id="price"
                    placeholder="e.g. 99"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full px-4 py-3 bg-(--color-bg) border border-(--color-primary-light) rounded-xl focus:outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 transition"
                    min="0"
                    required
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="duration">
                    Duration
                  </label>
                  <input
                    type="text"
                    id="duration"
                    placeholder="e.g. 10 hours, 4 weeks"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-4 py-3 bg-(--color-bg) border border-(--color-primary-light) rounded-xl focus:outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 transition"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={saving}
                className="w-full flex items-center justify-center gap-2 py-4 bg-(--color-primary) text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition disabled:opacity-50 mt-8"
              >
                {saving ? (
                  "Saving..."
                ) : (
                  <>
                    {isEditMode ? <FaSave size={16} /> : <FaPlus size={14} />}
                    {isEditMode ? "Save Changes" : "Create Course"}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCourse;
