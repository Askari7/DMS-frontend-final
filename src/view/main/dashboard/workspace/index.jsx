import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Upload, message } from "antd";
import {
  RiUploadCloud2Line,
  RiCheckboxCircleLine,
  RiCloseCircleLine,
} from "react-icons/ri";
import axiosInterceptor from "../../../../services/axiosInterceptor";

import axios from "axios";

function Workspace() {
  const [actionUrl, setActionUrl] = useState([]);

  const user = useSelector((state) => state.auth?.user);
  console.log(user);

  return (
    <div>
      Welcome {user?.email}
    </div>
  );
}

export default Workspace;
