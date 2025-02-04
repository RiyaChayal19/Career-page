import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Handle the Addinternship form
  const AddInternship = (e) => {
    e.preventDefault();
    navigate("/addinternship"); // After clicking the "AddInternship" button, navigate to the AddInternship form
  };

  // Handle the Addinternship form
  const AddJob = (e) => {
    e.preventDefault();
    navigate("/addjob"); // After clicking the "AddJob" button, navigate to the AddJob Form
  };

  return (
    <div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap');

          :root {
            --d: 700ms;
            --e: cubic-bezier(0.19, 1, 0.22, 1);
            --font-sans: 'Rubik', sans-serif;
            --font-serif: 'Cardo', serif;
          }

          * {
            box-sizing: border-box;
          }

          html,
          body {
            height: 100%;
          }

          body {
            display: grid;
            place-items: center;
          }

          .page-content {
            display: grid;
            grid-gap: 1rem;
            padding: 1rem;
            max-width: 1024px;
            margin: 0 auto;
            font-family: var(--font-sans);
          }

          @media (min-width: 600px) {
            .page-content {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 800px) {
            .page-content {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          .card {
            position: relative;
            display: flex;
            align-items: flex-end;
            overflow: hidden;
            padding: 3rem;
            width: 20rem;
            text-align: center;
            color: whitesmoke;
            background-color: whitesmoke;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
              0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
              0 16px 16px rgba(0, 0, 0, 0.1);
          }

          .card:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 110%;
            background-size: cover;
            background-position: 0 0;
            transition: transform calc(var(--d) * 1.5) var(--e);
            pointer-events: none;
          }

          .card:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 200%;
            pointer-events: none;
            background-image: linear-gradient(
              to bottom,
              hsla(0, 0%, 0%, 0) 0%,
              hsla(0, 0%, 0%, 0.009) 11.7%,
              hsla(0, 0%, 0%, 0.034) 22.1%,
              hsla(0, 0%, 0%, 0.072) 31.2%,
              hsla(0, 0%, 0%, 0.123) 39.4%,
              hsla(0, 0%, 0%, 0.182) 46.6%,
              hsla(0, 0%, 0%, 0.249) 53.1%,
              hsla(0, 0%, 0%, 0.320) 58.9%,
              hsla(0, 0%, 0%, 0.394) 64.3%,
              hsla(0, 0%, 0%, 0.468) 69.3%,
              hsla(0, 0%, 0%, 0.540) 74.1%,
              hsla(0, 0%, 0%, 0.607) 78.8%,
              hsla(0, 0%, 0%, 0.668) 83.6%,
              hsla(0, 0%, 0%, 0.721) 88.7%,
              hsla(0, 0%, 0%, 0.762) 94.1%,
              hsla(0, 0%, 0%, 0.790) 100%
            );
            transform: translateY(-50%);
            transition: transform calc(var(--d) * 2) var(--e);
          }

          /* Background image overrides for card */
          .card:nth-child(1):before {
            background-color: #fb752c;
          }
          .card:nth-child(2):before {
            background-color: #fb752c;
          }

          .card:nth-child(3):before {
            background-color: #fb752c;
          }

          .content {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: 2rem;
            transition: transform var(--d) var(--e);
            z-index: 2;
          }

          .content > * + * {
            margin-top: 1rem;
          }

          .title {
            font-size: 1.3rem;
            font-weight: bold;
            line-height: 1.2;
          }

          .copy {
            font-family: var(--font-serif);
            font-size: 1.125rem;
            font-style: italic;
            line-height: 1.35;
          }

          .btn {
            cursor: pointer;
            margin-top: 1.5rem;
            padding: 0.75rem 1.5rem;
            font-size: 0.65rem;
            font-weight: bold;
            letter-spacing: 0.025rem;
            text-transform: uppercase;
            color: white;
            background-color: black;
            border: 1px;
            border-color: aliceblue;
          }

          .btn:hover {
            background-color: rgba(177, 141, 141, 0.8);
          }

          .btn:focus {
            outline: 1px dashed yellow;
            outline-offset: 3px;
          }

          @media (hover: hover) and (min-width: 600px) {
            .card:after {
              transform: translateY(0);
            }

            .content {
              transform: translateY(calc(100% - 4.5rem));
            }

            .content > *:not(.title) {
              opacity: 0;
              transform: translateY(1rem);
              transition: transform var(--d) var(--e), opacity var(--d) var(--e);
            }

            .card:hover,
            .card:focus-within {
              align-items: center;
            }

            .card:hover:before,
            .card:focus-within:before {
              transform: translateY(-4%);
            }

            .card:hover:after,
            .card:focus-within:after {
              transform: translateY(-50%);
            }

            .card:hover .content,
            .card:focus-within .content {
              transform: translateY(0);
            }

            .card:hover .content > *:not(.title),
            .card:focus-within .content > *:not(.title) {
              opacity: 1;
              transform: translateY(0);
              transition-delay: calc(var(--d) / 8);
            }
          }
        `}
      </style>

      <main className="page-content">
        <div className="card">
          <div className="content">
            <h2 className="title">Add Internship</h2>
            <p className="copy">
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button className="btn" onClick={AddInternship}>
              ADD
            </button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Add Job</h2>
            <p className="copy">
              Plan your next beach trip with these fabulous destinations
            </p>
            <button className="btn" onClick={AddJob}>
              ADD
            </button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Manage Application</h2>
            <p className="copy">It's the desert you've always dreamed of</p>
            <button className="btn">ADD</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
