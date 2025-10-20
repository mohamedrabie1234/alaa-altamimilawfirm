import { useState } from "react";
import { db } from "../../firebase/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const AddProtfolio = () => {
  const [formData, setFormData] = useState({
    paragraph1: "",
    visionTitle: "",
    visionText: "",
    missionTitle: "",
    missionText: "",
  });

  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, "content", "whoAmI");
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        setMessage("تم اضافة محتوي من قبل من فضلك اذهب الي تعديل من انا");
        return;
      }

      await setDoc(docRef, formData);
      setMessage("Content added successfully!");
      setFormData({
        paragraph1: "",
        visionTitle: "",
        visionText: "",
        missionTitle: "",
        missionText: "",
      });
    } catch (error) {
      console.error("Error adding content: ", error);
      setMessage("Failed to add content. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Content</h1>
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
          Add Content
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-center font-bold ${
            message.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default AddProtfolio;
