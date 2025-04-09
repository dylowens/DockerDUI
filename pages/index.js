export default function Home() {
  return (
    <>
      <style jsx>{`
        form {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
          max-width: 400px;
          width: 100%;
          font-family: sans-serif;
          margin: auto;
        }
        label {
          display: block;
          margin-bottom: 0.25rem;
          font-weight: 600;
          color: #2d3748;
        }
        input {
          width: 100%;
          padding: 0.6rem;
          margin-bottom: 1rem;
          border: 1px solid #cbd5e0;
          border-radius: 6px;
          background-color: #edf2f7;
          font-size: 1rem;
        }
        input:focus {
          border-color: #3182ce;
          background-color: white;

        }
        button {
          background-color: #3182ce;
          color: white;
          padding: 0.75rem;
          width: 100%;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
        }
        button:hover {
          background-color: #2b6cb0;
        }
        #response {
          margin-top: 1rem;
          text-align: center;
          font-weight: bold;
        }
      `}</style>

      <form id="teamForm">
        <label>Team Name:</label>
        <input type="text" name="team_name" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Coordinator Name:</label>
        <input type="text" name="coordinator_name" required />
        <label>Coordinator Phone:</label>
        <input type="tel" name="coordinator_phone" required />
        <button type="submit">Submit</button>
        <p id="response"></p>
      </form>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.getElementById("teamForm").addEventListener("submit", async (e) => {
            e.preventDefault();
            const response = document.getElementById("response");
            response.style.color = "black";
            response.textContent = "Submitting...";
            const form = e.target;
            const formData = new FormData(form);
            const params = new URLSearchParams(formData);
            try {
              const res = await fetch("https://script.google.com/macros/s/AKfycbyLiR855lzavAFljCs1kMJnWnTCcMFoceU3PogSn-v5BneVZRnjajSFzUipieFy6qiO/exec?path=form-submit", {
                method: "POST",
                body: params
              });
              const text = await res.text();
              if (text === "DUPLICATE") {
                response.style.color = "red";
                response.textContent = "That team name is already registered.";
              } else if (text === "SUCCESS") {
                response.style.color = "green";
                response.textContent = "Sign Up Successful";
                window.open("https://buy.stripe.com/test_00g3fwcUB97d43m7ss", "_blank");
                form.reset();
              } else {
                response.style.color = "red";
                response.textContent = "Error submitting form.";
              }
            } catch (err) {
              response.style.color = "red";
              response.textContent = "Network error. Please try again.";
            }
          });
        `
      }} />
    </>
  );
}