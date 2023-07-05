import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const WorkingProcess = () => {
  const [wProcess, setWProcess] = React.useState();
  React.useEffect(() => {
    const getWProcess = async () => {
      const response = await axios.get(`${baseApiUrl}/api/working-process?populate=*`);
      setWProcess(response.data);
      // console.log(response.data);
    };
    getWProcess();
  }, []);
  return (
    <>
      {wProcess && (
        <div className="working-process-area pt-100 pb-75">
          <div className="container">
            <div className="section-title">
              <span>{wProcess.data.attributes.subTitle}</span>
              <h2>{wProcess.data.attributes.title}</h2>
            </div>

            <div className="row justify-content-center">
              {wProcess.data.attributes.process.slice(0, 4).map((info) => (
                <div className="col-lg-3 col-sm-6" key={info.id}>
                  <div className="single-working-process-card">
                    <div className="number">{info.number}</div>
                    <h3>{info.title}</h3>
                    <p>
                      {info.shortDec}
                    </p>
                  </div>
                </div>
              ))}
            
              <div className="working-process-line"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkingProcess;
