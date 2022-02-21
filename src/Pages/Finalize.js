import React, { useState, useEffect } from "react";
import Styles from "../Styles/finalize.module.css";
import { useSelector } from "react-redux";
import Resume1 from "./Resume1";
import { useDispatch } from "react-redux";

function Finalize() {
  const obj = useSelector((state) => state.Contactpagereducer);

  const [document, setDocument] = useState(obj.document);

  const send = useDispatch();
  //console.log("from final",con,sum);
  useEffect(() => {}, [document]);
  function handlechange1(e) {
    let { name, value } = e.target;
    console.log("from finalpage", name, value);
    setDocument({
      ...document,
      [name]: value,
    });

    var test = {
      [name]: value,
    };
    console.log("document" + document.color);
    send({ type: "DOCUMENT", payload: document });
  }

  return (
    <div className={Styles.containerbox}>
      <div className={Styles.left}>
        <div className={Styles.resumebox}>
          <Resume1 fontSize="20px" />
        </div>
      </div>
      <div className={Styles.right}>
        <div className={Styles.firstbox}>
          <h1>Here’s Your Resume!</h1>
          <p>You can change the design here</p>
          <div className={Styles.formatoption}>
            <p>Formatting Option</p>
            <div className={Styles.layout}>
              <p>Layout</p>
              <div className={Styles.buttonbox}>
                <button>CONDENSED</button>
                <button>STATNDARD</button>
                <button>EXPANDED</button>
              </div>
            </div>
            <div className={Styles.fontstyle}>
              <div>
                <p>Font Style</p>
                <select name="" id="">
                  <option value="">Raleway</option>
                  <option value="">Sansserif</option>
                  <option value="">Verdana</option>
                  <option value="">Times New Roman</option>
                </select>
              </div>
              <div>
                <p>Font Size</p>
                <select name="" id="">
                  <option value="">Small</option>
                  <option value="">Medium</option>
                  <option value="">Large</option>
                </select>
              </div>
            </div>
            <div className={Styles.colors}>
              <div>
                <p>Colors</p>
                <div className={Styles.colorbox}>
                  <div className={Styles.color1}>
                    <input
                      type="button"
                      name="color"
                      value="1"
                      onClick={handlechange1}
                    />
                  </div>
                  <div className={Styles.color2}>
                    <input
                      type="button"
                      name="color"
                      value="2"
                      onClick={handlechange1}
                    />
                  </div>
                  <div className={Styles.color3}>
                    <input
                      type="button"
                      name="color"
                      value="3"
                      onClick={handlechange1}
                    />
                  </div>
                  <div className={Styles.color4}>
                    <input
                      type="button"
                      name="color"
                      value="4"
                      onClick={handlechange1}
                    />
                  </div>
                  <div className={Styles.color5}>
                    <input
                      type="button"
                      name="color"
                      value="1"
                      onClick={handlechange1}
                    />
                  </div>
                  <div className={Styles.color6}>
                    <input
                      type="button"
                      name="color"
                      value="1"
                      onClick={handlechange1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.secondbox}>
          <p>Export Options</p>
          <div className={Styles.outputbutton}>
            <div>Download</div>
            <div>Print</div>
            <div>Email</div>
          </div>
        </div>
        <div className={Styles.thirdbox}>
          <div className={Styles.outputbutton}>
            <div>+Add New Section </div>
            <div>Change Template</div>
            <div>Back</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finalize;
