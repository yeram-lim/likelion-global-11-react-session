import { useState } from "react";

function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);

  return (
    <>
      <article>
        {/* 아이템 리스트 */}
        <section className={"list"}>
          <h1>아이템 리스트</h1>
          <ol>
            {/* 아이템 A */}
            <li>
              <span>A</span>
              <div>
                <div>{countA}</div>
                <div className={"button-list"}>
                  <button
                    onClick={() => {
                      setCountA(countA - 1);
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      setCountA(countA + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
            {/* 아이템 B */}
            <li>
              <span>B</span>
              <div>
                <div>{countB}</div>
                <div className={"button-list"}>
                  <button
                    onClick={() => {
                      setCountB(countB - 1);
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      setCountB(countB + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
            {/* 아이템 C */}
            <li>
              <span>C</span>
              <div>
                <div>0</div>
                <div className={"button-list"}>
                  <button
                    onClick={() => {
                      setCountC(countC - 1);
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      setCountC(countC + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          </ol>
        </section>
      </article>
      <style jsx>{`
        article {
          height: 100vh;
          width: 100vw;
          max-width: 30rem;
          margin: 0 auto;
          padding: 1.5rem;
          background: #ffc0cb21;
        }

        article h1 {
          padding: 0 0.5rem;
        }
        section.list {
          display: flex;
          flex-direction: column;
        }
        section.list ol {
          list-style-type: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        section.list ol li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-radius: 0.5rem;
          background-color: white;
          box-shadow: 0px 2px 10px 0px rgb(182 158 198 / 15%);
          height: 2rem;
        }
        section.list ol li > span {
          font-size: 1.5rem;
          font-weight: 500;
        }
        section.list ol li > div {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
        section.list ol li > div > div:first-child {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 0.5rem;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 5px;
          background: #efeded;
          font-weight: 700;
        }
        section.list ol li > div > div.button-list {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }
        section.list ol li > div > div.button-list button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 1.7rem;
          height: 1.7rem;
          cursor: pointer;
          border-radius: 5px;
          border: none;
          background: #f6ecff;
          font-size: 1rem;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}

export default App;
