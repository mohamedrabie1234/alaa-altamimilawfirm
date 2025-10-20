import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const EditProtfolio = () => {
  const [formData, setFormData] = useState({
    paragraph1: "",
    visionTitle: "",
    visionText: "",
    missionTitle: "",
    missionText: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch existing data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "content", "whoAmI"); // Adjust collection/document path as needed
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setFormData(docSnap.data());
        } else {
          console.error("No such document!");
          setMessage("No content found to edit.");
        }
      } catch (error) {
        console.error("Error fetching content: ", error);
        setMessage("Error fetching content. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, "content", "whoAmI"); // Adjust collection/document as needed
      await updateDoc(docRef, formData);

      setMessage("Content updated successfully!");
    } catch (error) {
      console.error("Error updating content: ", error);
      setMessage("Failed to update content. Please try again.");
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading content...</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Edit Content</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="paragraph1">
            المقدمه
          </label>
          <textarea
            id="paragraph1"
            name="paragraph1"
            value={formData.paragraph1}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="visionTitle">
            العنوان الاول
          </label>
          <input
            id="visionTitle"
            name="visionTitle"
            value={formData.visionTitle}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            type="text"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="visionText">
            تفاصيل العوان الاول
          </label>
          <textarea
            id="visionText"
            name="visionText"
            value={formData.visionText}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="missionTitle">
            العنوان الثاني
          </label>
          <input
            id="missionTitle"
            name="missionTitle"
            value={formData.missionTitle}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            type="text"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="missionText">
            تفاصيل العوان الثاني
          </label>
          <textarea
            id="missionText"
            name="missionText"
            value={formData.missionText}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Update Content
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-green-600 font-bold">{message}</p>
      )}
    </div>
  );
};

export default EditProtfolio;
