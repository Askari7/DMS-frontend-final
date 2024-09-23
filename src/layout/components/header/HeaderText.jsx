import { Col } from "antd";
import image from "../../../assets/images/memoji/newspaper.svg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HeaderText() {
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [companyName, setCompanyName] = useState(null);
  const [companyEmail, setCompanyEmail] = useState(null);
  const [ownerEmail, setOwnerEmail] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage?.getItem("user")));
    fetchDetails()
  }, []);

  const roleMapping = {
    1: "CEO",
    2: "Lead",
    3: "Senior Engineer",
    4: "Junior Engineer",
    5: "Designer",
    6: "Client",

  };

  const fetchDetails = async()=>{
    try {
      const response = await axios.get(
        `http://127.0.0.1:8083/api/clients/company?companyId=${user?.user.companyId}`,
        {
          headers: {
            Authorization: user?.accessToken,
            // Add other headers if needed
          },
        }
      );
      const {name,companyEmail,owner,ownerEmail} = response.data
      setCompanyName(name)
      setCompanyEmail(companyEmail)
      // setOwner(owner)
      // setOwnerEmail(ownerEmail)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Col
      xl={16}
      lg={14}
      className="hp-header-left-text hp-d-flex-center"
    >
      <div className="hp-header-left-text-item hp-p1-body hp-text-color-white-100 hp-text-color-dark-0 hp-ml-12 hp-mb-0" style={{ paddingTop: '32px', paddingBottom: '1px' }}>
      <p style={{ textAlign: 'left', display: 'inline-block', margin: '0 0 0 4px', fontWeight: 'bold' }}>
    {user?.user.firstName} {user?.user.lastName} <p style={{color: 'blue', display: 'inline-block', padding: '1px 8px', borderRadius: '4px', margin: '0' }}>
    {companyName}
  </p>
  </p>
  <p style={{ textAlign: 'left', color: 'blue', display: 'inline-block', padding: '1px 8px', borderRadius: '4px', backgroundColor: '#e0f7fa', margin: '0' }}>
    {roleMapping[user?.user.roleId]}
  </p>

</div>



    </Col>
  );
}
