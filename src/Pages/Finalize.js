import React, { useEffect, useState } from "react";
import Styles from "../Styles/finalize.module.css";
import Resume from "./Resume";
import { useDispatch } from "react-redux";
import { jsPDF } from 'jspdf';
import { useSelector } from "react-redux";


function Finalize() {
  const prevVal = useSelector(state=>state.document);
  const [document, setDocument] = useState(prevVal);
  const send = useDispatch();
  function handlechange1(e) {
    let { name, value } = e.target;
    setDocument({
      ...document,
      [name]: value,
    });
  }
  useEffect(() => {
    send({ type: "DOCUMENT", payload: document });
  },[document])

  // code for downloading pdf
  const printRef = React.useRef();
  const handleDownloadPdf = async () => {
    const element = printRef.current.children[0];
    const pdf = new jsPDF("p","pt","a4");
    pdf.html(element, {
      callback: function(pdf){
        var pagecount = pdf.internal.getNumberOfPages();
        pdf.deletePage(pagecount);
        pdf.save("/files/myPdf.pdf")
      }
    })
  };
  //code for printing 
  function print(){
    window.print();
  }

  return (
    <div className={Styles.containerbox}>
      <div className={Styles.left}>
        <div  ref={printRef} className={Styles.resumebox}>
        
           <Resume fontSize={document.fontSize} />
          
          
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
                <select onChange={handlechange1} name="fontFamily" >
                  <option onChange={handlechange1} >Raleway</option>
                  <option onChange={handlechange1} >Sans-serif</option>
                  <option onChange={handlechange1} >Verdana</option>
                  <option onChange={handlechange1} >Times New Roman</option>
                </select>
              </div>
              <div>
                <p>Font Size</p>
                <select onChange={handlechange1} name="fontSize" >
                  <option onChange={handlechange1} >Small</option>
                  <option onChange={handlechange1} >Medium</option>
                  <option onChange={handlechange1} >Large</option>
                </select>
              </div>
            </div>
            <div className={Styles.colors}>
              <div>
                <p>Colors</p>
                <div className={Styles.colorbox}>
          
                    <input
                    className={Styles.color1}
                      type="button"
                      name="color"
                      value="1"
                      onClick={handlechange1}
                    />
            
              
                    <input
                    className={Styles.color2}
                      type="button"
                      name="color"
                      value="2"
                      onClick={handlechange1}
                    />
                  
                    <input
                    className={Styles.color3}
                      type="button"
                      name="color"
                      value="3"
                      onClick={handlechange1}
                    />
                  
                  
                    <input
                    className={Styles.color4}
                      type="button"
                      name="color"
                      value="4"
                      onClick={handlechange1}
                    />
                  
                  
                    <input
                    className={Styles.color5}
                      type="button"
                      name="color"
                      value="5"
                      onClick={handlechange1}
                    />
                  
            
                    <input
                    className={Styles.color6}
                      type="button"
                      name="color"
                      value="6"
                      onClick={handlechange1}
                    />
                      <input
                    className={Styles.color7}
                      type="button"
                      name="color"
                      value="7"
                      onClick={handlechange1}
                    />
                      <input
                    className={Styles.color8}
                      type="button"
                      name="color"
                      value="8"
                      onClick={handlechange1}
                    />
            
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.secondbox}>
          <p>Export Options</p>
          <div className={Styles.outputbutton}>
            <div onClick={handleDownloadPdf}>Download</div>
            <div onClick={print}>Print</div>
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
