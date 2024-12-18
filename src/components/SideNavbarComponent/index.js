"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Button, Input, InputNumber, Layout, Menu, Modal } from 'antd';
import { message } from 'antd';
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import "./index.css"
// import { ClassroomOutlined, LoadingOutlined } from '@ant-design/icons';
import {
  UserOutlined,
  IdcardOutlined,
  LaptopOutlined,
  LoadingOutlined,
  PhoneOutlined,
  DownloadOutlined,
  BlockOutlined,
  LockOutlined,
  GlobalOutlined,
  PictureOutlined,
  LockTwoTone,
  CheckCircleTwoTone,
  StopOutlined,
  CopyOutlined,
  CheckOutlined,
  DeleteOutlined,
  NotificationOutlined,
  SettingOutlined,
  SoundOutlined,
  MusicOutlined,
  HistoryOutlined,
  SaveOutlined,
  EditOutlined,
  CloseOutlined,
  HomeOutlined,
  UploadOutlined,
  EyeOutlined,
  PlusOutlined,
  ReloadOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons';

import { usePassword } from '../../context';
import { Icon, backdropClasses } from '@mui/material';
import Batch from '../CourseBatch';
import Image from 'next/image';
import AdmissionModal from '../CourseAdmission';
import ReactModal from 'react-modal';
import BatchModal from '../CourseBatch';
import DeleteModal from '../CourseDelete';
import img from "../../../public/images/—Pngtree—line building dubai city silhouette_5978784.png"
import img1 from "../../../public/images/images1.png"
import InputComponent from '../InputComponent';
import { Bounce, toast } from 'react-toastify';
import DownloadButton from '../DownlaodButton';
import DownloadModal from '../DownloadModal';
import DeleteContactModal from '../ContactDelete';
import DeleteAllContactModal from '../ContactAllDelete';
import ImageUploader from '../ImageUploader';
import { useRouter } from 'next/router';
const { Sider } = Layout;




function SideNavbarComponent({router}) {

  // const router = useRouter();
  const idCardRef = useRef(null);



  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isModalVisible4, setIsModalVisible4] = useState(false);
  const [isModalVisible5, setIsModalVisible5] = useState(false);
  const [isModalVisible6, setIsModalVisible6] = useState(false);
  const [isModalVisible7, setIsModalVisible7] = useState(false);
  const [isModalVisible9, setIsModalVisible9] = useState(false);
  const [isModalVisible10, setIsModalVisible10] = useState(false);
  const [isModalVisible11, setIsModalVisible11] = useState(false);
  const [isModalVisible12, setIsModalVisible12] = useState(false);
  const [isModalVisible13, setIsModalVisible13] = useState(false);
  const [isModalVisible14, setIsModalVisible14] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [inputPassword, setInputPassword] = useState('');
  const [recheckPassword, setRecheckPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [inputCondition, setInputCondition] = useState("verify");

  const [admissionsOpen, setAdmissionsOpen] = useState("");

  const [admin, setAdmin] = useState(null)
  const [admissions, setAdmissions] = useState("")
  const [adminName, setAdminName] = useState("")
  const [adminPassword, setAdminPassword] = useState("")
  const [message, setMessage] = useState("")
  const [courseName, setCourseName] = useState("")


  const [allCourses, setAllCourses] = useState([])
  const [uniqueCities, setUniqueCities] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchedCities, setSearchedCities] = useState([])
  const [batchValues, setBatchValues] = useState(Array(allCourses.length).fill(0));

  const [currentUser, setCurrentUser] = useState(null)
  const [currentContact, setCurrentContact] = useState(null)
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [selectedItemData, setSelectedItemData] = useState(null)

  const [allContacts, setAllContacts] = useState([])
  const [contactsToLoad, setContactsToLoad] = useState(false)

  const [process, setProcess] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')

  const [image, setImage] = useState(null); // For storing the uploaded image
  const [preview, setPreview] = useState(null); // For image preview
  const [contentImage, setContentImage] = useState("")
  const [content, setContent] = useState(null)
  const [resetImage, setResetImage] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [updatingContent, setUpdatingContent] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [saving, setSaving] = useState(false)

  const [infoImage, setInfoImage] = useState("")
  const [resetInfoImage, setResetInfoImage] = useState(false);



  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000
    },
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      borderRadius: '8px',
      padding: '0px',
      maxWidth: '600px', // Adjust width as needed
      width: '90%',
      maxHeight: '90vh',
      height: "457px",
      overflow: 'auto',

    }
  };
  const scrollStyles = {
    // Scrollbar styles
    scrollbarWidth: 'thin',
    scrollbarColor: '#6b7280 #d1d5db', // thumb color, track color
  }

  const customStyles1 = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000
    },
    content: {
      backgroundColor: 'rgba(204, 227, 230, 0.98)',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      borderRadius: '8px',
      padding: '20px',
      width: '400px', // Reduced width for a narrower modal
      maxHeight: '500px', // Increased height for more content space
      height: '450px',
      overflow: 'hidden', // Prevent modal overflow
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      // backgroundColor: '#f5f5f5', // Light grey background
      color: '#333', // Dark grey text color
      fontFamily: 'Georgia, serif', // Classic serif font
      display: 'flex',
      flexDirection: 'column'
    }
  };


  const customStyles2 = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 1000,
    },
    content: {
      backgroundColor: 'rgba(248, 251, 252, 0.95)',
      top: '5%', // Reduced height for more space at the top
      left: '50%',
      bottom: '15%', // Added margin at the bottom
      transform: 'translate(-50%, 0)',
      border: 'none',
      borderRadius: '12px',
      padding: '10px',
      width: '420px',
      height: '550px', // Further reduced height
      overflow: 'hidden',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      color: '#333',
      // fontFamily: 'Georgia, serif',
      display: 'flex',
      flexDirection: 'column',
    },
  };


  const handleImageUpload = async (image) => {
    console.log("image form Uploader-->", image)
    // setContentImage(image)
    const base64Image = await getBase64Image(image);
        console.log("Base64 image:", base64Image);
        setContentImage(image);
    setResetImage(false);
  };
  
  const getBase64Image = async (imageUrl) => {
    console.log("Function Running!");
    if (typeof window !== 'undefined') {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
        } catch (error) {
            console.error('Error fetching image for base64 conversion:', error);
            return null;
        }
    } else {
        console.warn('getBase64Image function is being executed in a non-browser context.');
        return null;
    }
  };

  const handleDownload = async () => {
    setDownloading(true);
    console.log("contentImage", contentImage);

    const inputData = idCardRef.current;

    try {
      const canvas = await html2canvas(inputData, {
        scale: 15, // Reduced scale from 9 to 2
        letterRendering: true,
      });

      const imageData = canvas.toDataURL("image/jpeg", 0.5); // Changed format to JPEG and reduced quality to 0.5

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
      });

      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imageData, "JPEG", 0, 0, width, height, '', 'FAST');
      pdf.save(`Student: UbaidRaza.pdf`);

      setDownloading(false);
      toast.success('Downloaded Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (e) {
      console.error("Error generating PDF:", e);
      setDownloading(false);
      toast.error('Error, Try again later!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
};


  const handleRemoveImage = () => {
    console.log("Removing..")
    setImage(null);
    setContentImage("");
    setResetImage(true)
    // onRemove(); // Trigger parent function
  };

  const handleInfoImageUpload = (imageee) => {
    console.log("image form Uploader-->", imageee)
    setInfoImage(imageee)
    setResetInfoImage(false);
  };
  
  const handleRemoveInfoImage = () => {
    console.log("RemovingInfo..")
    // setImage(null);
    setInfoImage("");
    setResetInfoImage(true)
    // onRemove(); // Trigger parent function
  };


  const customStyles3 = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      zIndex: 1000,
    },
    content: {
      width: "650px",
      height: "550px",
      margin: "auto",
      borderRadius: "20px",
      padding: "0",
      backgroundColor: "linear-gradient(to bottom, #f8f9fa, #e9ecef)",
      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.4)",
      display: "flex",
      flexDirection: "row",
      overflow: "hidden",
    },
  };







  const { api, setApi, allowAdmission, setAllowAdmission, coursesToLoad, setCoursesToLoad, sideNavbarCity, setSideNavbarCity, contactLoad, setContactLoad } = usePassword();

  console.log(inputCondition)
  console.log(inputPassword)

  useEffect(() => {
    console.log("admin", admin)
    if (admin) {
      setAdmissionsOpen(admin.admissions)
      setInfoImage(admin.infoImage)
    }

  }, [admin])



  useEffect(() => {
    console.log("coursesToLoad-->", coursesToLoad)

    if (coursesToLoad) {
      console.log("gettingCourses()")
      gettingCourses();
    }
  }, [coursesToLoad])

  useEffect(() => {
    console.log("contactLoad-->", contactLoad)

    if (contactLoad) {
      console.log("gettingContacts()")
      gettingContacts();
    }
  }, [contactLoad])

  useEffect(() => {
    gettingAdmin();
  }, [isModalVisible2])

  useEffect(() => {
    if (allCourses.length > 0) {
      gettingCities()
    };
  }, [allCourses])

  useEffect(()=>{
    if(contentImage === ""){
      gettingContent();
    }
}, [uniqueCities])

  // useEffect(() => {
  //   if(api){
  //     gettingCities()
  //   };
  // }, [api])


  // isModalVisible1
  const handlePassword = () => {


    if (inputCondition === "verify") {
      if (inputPassword === admin.adminPassword) {
        console.log(admin.adminPassword)
        setInputCondition("update")
        setInputPassword("")
      }
      else {
        alert("First , enter correct current Password")
      }
    }
    else if (inputCondition === "update") {
      if (inputPassword) {
        setRecheckPassword(inputPassword)
        setInputPassword("")
        setInputCondition("recheck")
      }
    }
    else if (inputCondition === "recheck") {
      if (inputPassword === recheckPassword) {
        setAdminPassword(inputPassword)
        updateAdminPassword(admin._id)
        setInputPassword("")
        setInputCondition("done")

        // alert(`Password changed into "${inputPassword}" `)
      }
      else {
        toast.error('Type again!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    }
    // setPassword(inputPassword);
    // setInputPassword('');
  };

  const updateAdminPassword = async (adminId) => {


    try {
      if (inputPassword) {
        let data = await fetch(`/api/admins/${adminId}`, {
          method: "PUT",
          body: JSON.stringify({ _id: adminId, adminPassword: inputPassword }), headers: {
            "Content-Type": "application/json"
          }
        })
        data = await data.json()
        console.log(data, `/api/admins/${adminId}`)
        // console.log("info-->",data);
        if (data.success) {
          toast.success(`New Password: ${data.result.adminPassword}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          gettingAdmin()
          handleCancel(1)
          setInputCondition("verify")
          // setOpen(false);
        }
        else {
          console.log(data);
          toast.error(data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      }
      else {
        console.log("adminPassword nhi araha")
      }
    }
    catch (error) {
      console.log("error-->", error)
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  const updateInfoImage = async (adminId, infoImage) => {

console.log("infoImage", infoImage)
    setSaving(true);
    try {
      
        let data = await fetch(`/api/admins/${adminId}`, {
          method: "PUT",
          body: JSON.stringify({ _id: adminId, infoImage: infoImage }), headers: {
            "Content-Type": "application/json"
          }
        })
        data = await data.json()
        console.log(data, `/api/admins/${adminId}`)
        // console.log("info-->",data);
        if (data.success) {
          toast.success(`New Info-Image: ${data.result.infoImage}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          // gettingAdmin()
          // handleCancel(14)
          // setInputCondition("verify")
          // setOpen(false);
        }
        else {
          console.log(data);
          toast.error(data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      
      
    }
    catch (error) {
      console.log("error-->", error)
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    setSaving(false);
  }

  const updateContentImage = async (contentId) => {
    try {
      setUpdatingContent(true)
      if (contentId) {  // Ensure contentId and contentImage are valid
        console.log("Updating Content Image...");
        console.log("Content ID:", contentId);
        console.log("Content Image:", contentImage);
  
        // Make PUT request to update content image
        let data = await fetch(`/api/content/${contentId}`, {
          method: "PUT",
          body: JSON.stringify({contentImage: contentImage}),  // Pass the image data here
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        data = await data.json();
        console.log("API Response:", data);
  
        // If the update is successful
        if (data.success) {
          toast.success(`New Image: ${data.result.contentImage}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          // handleCancel(13)  // Optionally close the modal after success
        } else {
          toast.error(data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      } else {
        console.log("Missing contentId");
      }
      setUpdatingContent(false);
    } catch (error) {
      console.log("Error:", error);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  

  // isModalVisible2
  const updateMesssage = async (adminId) => {


    try {
      if (message) {
        let data = await fetch(`/api/admins/${adminId}`, {
          method: "PUT",
          body: JSON.stringify({ _id: adminId, textAdmission: message }), headers: {
            "Content-Type": "application/json"
          }
        })
        data = await data.json()
        console.log(data, `/api/admins/${adminId}`)
        // console.log("info-->",data);
        if (data.success) {
          toast.success(`Message sent.....  ${data.result.textAdmission}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          setMessage("")
        }
        else {
          console.log(data);
          toast.error(data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      }
      else {
        console.log("Message nhi araha")
      }
    }
    catch (error) {
      console.log("error-->", error)
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  const updateAdmissions = async (adminId, newStatus) => {


    try {
      // if(admissionsOpen){
      let data = await fetch(`/api/admins/${adminId}`, {
        method: "PUT",
        body: JSON.stringify({ _id: adminId, admissions: newStatus, textAdmission: "" }), headers: {
          "Content-Type": "application/json"
        }
      })
      data = await data.json()
      console.log(data, `/api/admins/${adminId}`)
      // console.log("info-->",data);
      if (data.success) {
        toast.success(`Admissions are.. ${data.result.admissions}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        setAllowAdmission(data.result.admissions)
        // setInputCondition("verify")
        // setOpen(false);
      }
      else {
        console.log(data);
        toast.error(data.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    }
    catch (error) {
      console.log("error-->", error)
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  const handleSwitchChange = () => {
    const newStatus = admissionsOpen === "Open" ? "Close" : "Open";
    setAdmissionsOpen(newStatus);
    updateAdmissions(admin._id, newStatus); // Update admission status
  };



  const showModal = (par, itemData) => {
    if (par === 1) {
      console.log("showModal", par)
      setIsModalVisible1(true)
    }
    else if (par === 2) {
      console.log("showModal", par)
      setIsModalVisible2(true)
    }
    else if (par === 3) {
      console.log("showModal", par)
      setIsModalVisible3(true)
    }
    else if (par === 4 && itemData) {
      console.log("showModal", par)
      setCurrentUser(itemData)
      setIsModalVisible4(true)
    }
    else if (par === 5) {
      console.log("showModal", par)
      // console.log("item", itemData)
      setCurrentUser(itemData)
      setIsModalVisible5(true)
    }
    else if (par === 6) {
      console.log("showModal", par)
      // console.log("item", itemData)
      setCurrentUser(itemData)
      setIsModalVisible6(true)
    }
    else if (par === 7) {
      console.log("showModal", par)
      setIsModalVisible7(true)
    }
    else if (par === 9) {
      console.log("showModal", par)
      setIsModalVisible9(true)
    }
    else if (par === 10) {
      console.log("showModal", par)
      setIsModalVisible10(true)
    }
    else if (par === 11) {
      console.log("showModal", par)
      setCurrentContact(itemData)
      setIsModalVisible11(true)

    }
    else if (par === 12) {
      console.log("showModal", par)
      setIsModalVisible12(true)

    }
    else if (par === 13) {
      console.log("showModal", par)
      setIsModalVisible13(true)

    }
    else if (par === 14) {
      console.log("showModal", par)
      setIsModalVisible14(true)

    }
  };

  const handleCancel = (par) => {
    if (par === 1) {
      console.log("closeModal", par)
      setIsModalVisible1(false)
    }
    else if (par === 2) {
      console.log("closeModal", par)
      setIsModalVisible2(false)
    }
    else if (par === 3) {
      console.log("closeModal", par)
      setIsModalVisible3(false)
    }
    else if (par === 4) {
      console.log("closeModal", par)
      setIsModalVisible4(false)
    }
    else if (par === 5) {
      console.log("closeModal", par)
      setIsModalVisible5(false)
    }
    else if (par === 6) {
      console.log("closeModal", par)
      setIsModalVisible6(false)
    }
    else if (par === 7) {
      console.log("closeModal", par)
      setIsModalVisible7(false)
    }
    else if (par === 9) {
      console.log("closeModal", par)
      setIsModalVisible9(false)
    }
    else if (par === 10) {
      console.log("closeModal", par)
      setIsModalVisible10(false)
    }
    else if (par === 11) {
      console.log("closeModal", par)
      setIsModalVisible11(false)
    }
    else if (par === 12) {
      console.log("closeModal", par)
      setIsModalVisible12(false)
    }
    else if (par === 13) {
      console.log("closeModal", par)
      setIsModalVisible13(false)
    }
    else if (par === 14) {
      console.log("closeModal", par)
      setIsModalVisible14(false)
    }
  };

  const back = () => {
    if (inputCondition === "update") {
      setInputCondition("verify")
    }
    else if (inputCondition === "recheck") {
      setInputCondition("update")
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const gettingAdmin = async () => {
    console.log("gettingAdmin")
    try {
      const res = await fetch("/api/admins", {
        method: "GET",
        cache: "no-cache", // Set cache control policy to 'no-cache'
      });
      const data = await res.json();
      if (data.success) {
        setAdmin(data.data[0])
      }
      else {
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }

    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const gettingContent = async () => {
    console.log("gettingContent")
    try {
      const res = await fetch("/api/content", {
        method: "GET",
        cache: "no-cache", // Set cache control policy to 'no-cache'
      });
      const data = await res.json();
      console.log("gettingContent ka data-->",data)
      if (data.success) {
        setContentImage(data?.data[0].contentImage)
        // setContentImage(data?.data[0].infoImage)
        setContent(data?.data[0])
      }
      else {
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }

    } catch (error) {
      console.error("Error fetching contentImage:", error);
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const gettingCourses = async () => {
    console.log("gettingCourses");
    try {
      const res = await fetch("/api/courses", {
        method: "GET",
        cache: "no-cache", // Set cache control policy to 'no-cache'
      });
      const data = await res.json();
      console.log("gettingCourses ka data-->", data)

      if (data.success) {
        const courses = Array.isArray(data.data) ? data.data : [data.data]; // Use data.data directly
        console.log("allCourses-->", courses)

        const sortedCourses = courses.slice().sort((a, b) => {
          const courseA = a.course.toLowerCase(); // Convert to lowercase for case-insensitive sorting
          const courseB = b.course.toLowerCase();

          // Natural sorting using localeCompare with options
          return courseA.localeCompare(courseB, undefined, { numeric: true });
        });



        setAllCourses(courses);
        setCoursesToLoad(false)
      } else {
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setAllCourses([]);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const gettingCities = async () => {
    console.log("gettingCities")
    try {
      const res = await fetch("/api/getCities", {
        method: "GET",
        cache: "no-cache", // Set cache control policy to 'no-cache'
      });
      const data = await res.json();
      if (data.success) {
        setUniqueCities(data.data)
        console.log("UniqueCities-->", data.data)
        gettingContacts();
      }
      else {
        console.log(data)
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const gettingContacts = async () => {
    console.log("gettingContacts");
    try {
      const res = await fetch("/api/contacts", {
        method: "GET",
        cache: "no-cache", // Set cache control policy to 'no-cache'
      });
      const data = await res.json();
      console.log("gettingContacts ka data-->", data)

      if (data.success) {
        const contacts = Array.isArray(data.data) ? data.data : [data.data]; // Use data.data directly
        console.log("allContacts-->", contacts)



        setAllContacts(contacts);
        setContactLoad(false)
      } else {
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setAllContacts([]);
        setContactLoad(false)

      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (phoneNumber.length === 12) {
      setProcess(true);

      try {
        const response = await fetch("/api/addInform", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ contact: phoneNumber }),
        });

        const data = await response.json();
        console.log("data of Contact --> ", data.message)
        if (data.success && data.message !== "Already Exists!") {
          setProcess(false);
          toast.success('Contact No Added!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          gettingContacts();
        }
        else if (data.success && data.message == "Already Exists!") {
          setProcess(false);
          toast.success(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
        else {
          setProcess(false);
          toast.error(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      } catch (e) {
        setProcess(false);
        toast.error('Error occurred: ' + e.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }

      setPhoneNumber('');
      setProcess(false);
    } else {
      toast.error('Enter Complete Phone No!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };


  const formatPhoneNumber = (input) => {
    const formattedNumber = input.replace(/\D/g, '').replace(/(\d{4})(\d{7})/, '$1-$2');
    return formattedNumber;
  };

  const handleChange2 = (event) => {
    const inputValue = event.target.value

    if (inputValue.length <= 12) {
      const formattedPhone = formatPhoneNumber(inputValue);


      setPhoneNumber(formattedPhone)
    }
  }

  // Function to copy all phone numbers to clipboard
  const copyAllPhoneNumbers = () => {
    const allNumbers = allContacts.map(contact => contact.contact).join(', ');

    navigator.clipboard.writeText(allNumbers)
      .then(() => {
        // alert('All phone numbers copied to clipboard!');  // Success notification
        toast.success('All phone numbers copied to clipboard!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        console.log(`Copied to clipboard: ${allNumbers}`); // Optional logging for debugging
      })
      .catch(() => {
        // alert('Failed to copy phone numbers');  // Error notification
        toast.error('Failed to copy phone numbers', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        console.error('Failed to copy phone numbers'); // Optional error logging
      });
  };

  // Function to copy a single phone number
  const copyPhoneNumber = (phoneNumber) => {
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        // alert(`Phone number ${phoneNumber} copied!`);
        toast.success(`Phone number ${phoneNumber} copied!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        console.log(`Phone number ${phoneNumber} copied!`);
      })
      .catch(() => {
        alert('Failed to copy phone number');
        toast.error('Failed to copy phone number', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        console.error('Failed to copy phone number');
      });
  };



  // const handleBatchChange = (index, value) => {
  //   const newBatchValues = [...batchValues];
  //   newBatchValues[index] += value;
  //   setBatchValues(newBatchValues);
  // };


  const reloadButton = () => {
    console.log("reloadButton")
    setCoursesToLoad(true)
  }

  const addCourse = async () => {
    console.log("courseName-->", courseName)
    const formattedValue = courseName.trim().replace(/\s+/g, ' ');
    console.log("formattedValue-->", formattedValue)

    try {
      const response = await fetch("/api/addCourse",
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ course: formattedValue, admission: "Closed", batch: 1 })


        });

      const data = await response.json()
      if (data.success) {
        setCourseName("")
        setCoursesToLoad(true)
        toast.success('Course Added!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        console.log("data-->", data)
      }
      else {
        console.log("data-->", data)
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }

    }
    catch (e) {
      console.log('error', e);
      toast.error(e, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  const searchingCities = (uniqueCities, searchTerm) => {
    console.log("function running here are searchCities value -->", searchTerm); // Log searchTerm for debugging
    const lowerCaseTerm = searchTerm.toLowerCase(); // Ensure case-insensitive search

    // If searchTerm is empty, return all uniqueCities in lowercase for comparison:
    if (!searchTerm) {
      return uniqueCities.map(city => ({ ...city, _id: city._id.toLowerCase() }));
    }

    return uniqueCities.filter((city) => {
      const lowerCaseCity = city._id.toLowerCase();
      // Combine prefix and substring search:
      return lowerCaseCity.startsWith(lowerCaseTerm) || lowerCaseCity.includes(lowerCaseTerm);
    });
  };

  const eyeOutlinedClick = (value) => {
    console.log("sideNavbarCity-->", value)
    setSideNavbarCity(value)
  };


  useEffect(() => {
    const handleSearch = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        const newSearchedCities = await searchingCities(uniqueCities, searchTerm);
        setSearchedCities(newSearchedCities);
        if (newSearchedCities.length === 0) {
          toast.error("City not Found!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      } catch (error) {
        console.error('Error performing search:', error);
        toast.error(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        // Handle errors appropriately (e.g., display an error message)
      } finally {
        setIsLoading(false); // Set loading state to false regardless of success or error
      }
    };

    if (searchTerm) {
      handleSearch();
    }
  }, [searchTerm, uniqueCities]);

  //  const phoneNumbers = [1111111111111, 1111111111111, 1111111111111, 1111111111111, 1111111111111, 1111111111111, 1111111111111, 1111111111111, 1111111111111, 1111111111111, 1111111111111, 1111111111111, 1111111111111, 1111111111111, 1111111111111, 1111111111111, 1111111111111, 1111111111111, 1111111111111, 1111111111111, ]

  return (
    <Layout style={{ height: '100%', position: 'fixed', marginTop: '0px' }}>
      <Sider style={{ backgroundColor: "#0E4C92", paddingTop: '10px', height: "100%" }} width={80} theme="dark">
        <Menu mode="vertical" className='space-y-5' style={{ backgroundColor: "#0E4C92" }} theme="dark" defaultSelectedKeys={['1']}>
          {/* <Menu.Item key="i1" icon={<Image style={{ borderRadius: "20px", marginLeft: '-25%', width: "100%" }}   width={600} height={400} src='/images/BhattiSahab.jpg' alt='User' />} /> */}
          <Menu.Item key="1" icon={<LockOutlined />} onClick={() => showModal(1)} />
          <Menu.Item key="2" icon={<StopOutlined />} onClick={() => showModal(2)} />
          <Menu.Item key="3" icon={<LaptopOutlined />} onClick={() => showModal(3)} />
          <Menu.Item key="4" icon={<GlobalOutlined />} onClick={() => showModal(7)} />
          <Menu.Item key="6" icon={<DownloadOutlined />} onClick={() => showModal(9)} />
          <Menu.Item key="10" icon={<PhoneOutlined />} onClick={() => showModal(10)} />
          <Menu.Item key="11" icon={<IdcardOutlined />} onClick={() => showModal(13)} />
          <Menu.Item key="12" icon={<PictureOutlined />} onClick={() => showModal(14)} />
          <Menu.Item key="13" icon={<HomeOutlined />} onClick={() => router.push('/')} />
          <Menu.Item key="5" icon={api ? (
            <div className="flex items-center space-x-2">
              <div className="loader-dot w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
              <div className="loader-dot w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out', animationDelay: '0.3s' }}></div>
              <div className="loader-dot w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out', animationDelay: '0.6s' }}></div>
              <div className="loader-dot w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out', animationDelay: '0.9s' }}></div>
            </div>
          ) : (<ReloadOutlined />)} onClick={() => { setApi(true) }} />

          {/* <Menu.Item key="3" icon={<LaptopOutlined />} onClick={() => showModal()} />
          <Menu.Item key="4" icon={<SaveOutlined />} onClick={() => showModal()} />
          <Menu.Item key="5" icon={<NotificationOutlined />} onClick={() => showModal()} />
          <Menu.Item key="6" icon={<SettingOutlined />} onClick={() => showModal()} />
          <Menu.Item key="7" icon={<SoundOutlined />} onClick={() => showModal()} />
          <Menu.Item key="8" icon={<HistoryOutlined />} onClick={() => showModal()} /> */}
          {/* <Menu.Item key="6" icon={<MusicOutlined />} /> */}
        </Menu>
      </Sider>


      {/* ye admin password ka he... */}
      <Modal
        visible={isModalVisible1}
        onCancel={() => handleCancel(1)}
        footer={null}
        centered
      >
        {inputCondition === "done" ? (<div className="flex justify-center items-center h-[140px]">
          <div className="flex  space-x-4">
            <div className="loader-dot w-5 h-5 bg-gray-800 rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
            <div className="loader-dot w-5 h-5 bg-gray-800 rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out', animationDelay: '0.3s' }}></div>
            <div className="loader-dot w-5 h-5 bg-gray-800 rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out', animationDelay: '0.6s' }}></div>
            <div className="loader-dot w-5 h-5 bg-gray-800 rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out', animationDelay: '0.9s' }}></div>
            <div className="loader-dot w-5 h-5 bg-gray-800 rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out', animationDelay: '1.2s' }}></div>
          </div>
        </div>) : (<><div style={{ marginBottom: '20px' }}>
          <p>{inputCondition === "verify" ? "First Verify It is You?!" : inputCondition === "update" ? "Enter The Passowrd to be updated!" : "Type again to Confirm"} </p>
          <Input.Password
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            placeholder={inputCondition === "verify" ? "Enter Current Password" : inputCondition === "update" ? "Enter New Password" : "Confirm Password"}
            addonAfter={
              showPassword ? (
                <EyeInvisibleOutlined onClick={togglePasswordVisibility} />
              ) : (
                <EyeOutlined onClick={togglePasswordVisibility} />
              )
            }
          />
        </div>
          <Button type="primary" style={{ backgroundColor: "#0056b3" }} onClick={handlePassword}>{inputCondition === "verify" ? "Next" : inputCondition === "update" ? "Save Password" : "Confirm"}</Button>
          <Button type="primary" style={{ backgroundColor: "#0056b3", marginLeft: "250px" }} onClick={() => { back() }}>Back</Button>
        </>)}
        {/* <div style={{ marginBottom: '20px' }}>
        <p>{inputCondition === "verify"? "First Verify It is You?!" : inputCondition === "update" ? "Enter The Passowrd to be updated!": "Type again to Confirm"} </p>
        <Input.Password
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder={inputCondition === "verify"? "Enter Current Password" : inputCondition === "update" ? "Enter New Password": "Confirm Password"}
          addonAfter={
            showPassword ? (
              <EyeInvisibleOutlined onClick={togglePasswordVisibility} />
            ) : (
              <EyeOutlined onClick={togglePasswordVisibility} />
            )
          }
        />
      </div>
      <Button type="primary" style={{backgroundColor:"#0056b3"}} onClick={handlePassword}>{inputCondition === "verify"? "Next" : inputCondition === "update" ? "Save Password": "Confirm"}</Button> */}
      </Modal>

      {/* ye admissions off ka he.... */}
      <Modal
        visible={isModalVisible2}
        onCancel={() => handleCancel(2)}
        footer={null}
        centered
      >
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <p style={{ fontSize: '24px', marginBottom: '20px' }}>Admissions Status</p>
          <div
            className='mx-auto'
            onClick={handleSwitchChange}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '2px solid #ccc',
              borderRadius: '30px',
              padding: '2px',
              width: '120px',
              height: '60px',
              backgroundColor: admissionsOpen === "Open" ? '#1890ff' : '#f5222d',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#fff',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                transform: admissionsOpen === "Open" ? 'translateX(58px)' : 'translateX(2px)',
                transition: 'transform 0.3s',
              }}
            />
          </div>
          {admissionsOpen === "Close" ? (<><p style={{ fontSize: '18px', marginTop: '20px', color: '#333' }}>Enter The Message for Users, while courses are Closed</p> <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Message"

          />
            <Button type="primary" style={{ width: '60%', backgroundColor: '#0056b3', color: 'white', border: 'none', marginTop: '20px' }} onClick={() => { updateMesssage(admin._id) }}>Message Done</Button></>) : null}


          <Button type="primary" style={{ width: '60%', backgroundColor: '#0056b3', color: 'white', border: 'none', marginTop: '20px' }} onClick={() => { handleCancel(2) }}>Back</Button>
        </div>
      </Modal>




      {/* ye courses ka he..           */}
      <ReactModal
        isOpen={isModalVisible3}
        onRequestClose={() => handleCancel(3)}
        style={customStyles}
        contentLabel="Custom Modal"
      >
        <div className="py-4 px-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-serif text-[#4d4b4b] mb-6">Add Course - {allCourses.length}</h2>
          <div className="mb-6 flex items-center">
            <Input
              type="text"
              placeholder="Enter Course"
              label="Course"
              className="border border-gray-300 rounded-md px-3 py-2 w-80 mr-2"
              value={courseName}
              onChange={(event) => {

                const newCourse = event.target.value;

                // Capitalize the first letter of each word
                const formattedCourse = newCourse.replace(/\b\w/g, (char) => char.toUpperCase());
                // console.log("formattedCourse-->",formattedCourse)
                // Update the state with the formatted name
                setCourseName(formattedCourse)
              }}

            />
            <Button
              style={{ backgroundColor: "dark-blue" }}
              className="bg-blue-900 h-10 text-white text-antique-white rounded-md justify-between items-center text-center"
              onClick={() => { addCourse() }}
            >
              Add Course
            </Button>
            <Button
              style={{ backgroundColor: "dark-blue" }}
              className="bg-blue-600 h-10 w-[20%] text-white text-antique-white rounded-md justify-between my-auto items-center text-center"
              onClick={() => { reloadButton() }}
            >
              {coursesToLoad ?
                (
                  <div className="flex items-center space-x-2 ml-[20%]">
                    <div className="loader-dot w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
                    <div className="loader-dot w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out', animationDelay: '0.3s' }}></div>
                    <div className="loader-dot w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out', animationDelay: '0.6s' }}></div>
                    <div className="loader-dot w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out', animationDelay: '0.9s' }}></div>
                  </div>
                ) :
                (<> Reload <ReloadOutlined /></>)
              }

            </Button>
          </div>
          <div className="w-full h-[250px] overflow-y-auto overflow-x-hidden max-h-[250px] rounded-md border-4 border-[#4d4b4b]"
            style={scrollStyles}
          >
            <table className="w-[528px]">
              <thead className='border-b-2 border-[#4d4b4b]'>
                <tr className=" text-white text-1xl font-large ">
                  <th className="px-6 py-3 bg-[#9e9e9efa] border-r-3 border-[#4d4b4b] w-[275px]">Course</th>
                  <th className="px-3 py-3 bg-[#8d8c8cfa] border-r-3 border-[#4d4b4b] text-center">Batch</th>
                  <th className="px-3 py-3 bg-[#9e9e9efa] border-r-3 border-[#4d4b4b]  text-center">Admission</th>
                  <th className="px-3 py-3 bg-[#8d8c8cfa] border-r-3 border-[#4d4b4b] w-[80px] text-center">Delete</th>
                </tr>
              </thead>
              <tbody className=''>
                {
                  allCourses.length > 0 ?

                    allCourses.map((item) => (
                      <tr key={item._id} className="border-b border-gray-300"> {/* Added bottom border to each row */}
                        <td className="px-3 py-3 text-[#4d4b4b] font-bold">{item.course}</td>
                        <td className="px-3 py-3 text-center">
                          <div className="flex items-center justify-center ">

                            <p className="text-2xl font-bold text-blue-600">{item.batch}</p>
                            <span className="cursor-pointer ml-1" onClick={() => { showModal(4, item) }}>
                              <PlusOutlined style={{ fontSize: '18px', color: 'gray', strokeWidth: '2px' }} />
                            </span>
                            {/* <Batch selectedItem={item}/> */}
                          </div>
                        </td>
                        <td className="px-3 py-3 text-center">
                          {/* <Button onClick={()=>{showModal(5,item)}}>Admission</Button> */}
                          <Button className='text-0.5xl font-small'
                            style={{ opacity: '75%', backgroundColor: item.admission === "Opened" ? "green" : "red", width: '70px', height: '30px', color: 'white', padding: '5px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}
                            onClick={() => { showModal(5, item) }}
                          >
                            {item.admission}
                          </Button>
                        </td>
                        <td className='text-center'>
                          <Button style={{ backgroundColor: "dark-blue" }} className="bg-blue-900 h-10 text-white  text-antique-white rounded-md justify-between items-center  text-center" onClick={() => { showModal(6, item) }}><DeleteOutlined /></Button>
                        </td>
                      </tr>
                    ))

                    :
                    <tr>
                      <td colSpan="4">
                        <div className="flex justify-center items-center mt-[-25px] ml-[265px] h-screen w-[10px]">
                          <div className="flex mt-[-370px] space-x-4">
                            <div className="loader-dot w-4 h-4 bg-blue-800 rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
                            <div className="loader-dot w-4 h-4 bg-blue-800 rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out', animationDelay: '0.3s' }}></div>
                            <div className="loader-dot w-4 h-4 bg-blue-800 rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out', animationDelay: '0.6s' }}></div>
                            <div className="loader-dot w-4 h-4 bg-blue-800 rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out', animationDelay: '0.9s' }}></div>
                            {/* <div className="loader-dot w-4 h-4 bg-blue-800 rounded-full animate-pulse" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out', animationDelay: '1.2s' }}></div> */}
                          </div>
                        </div>
                      </td>
                    </tr>

                }
              </tbody>

            </table>
          </div>
          <Button
            style={{ backgroundColor: "dark-blue" }}
            className="bg-blue-600 h-8 w-[100px] mt-4 text-white text-antique-white rounded-md justify-content-center justify-between items-center text-center ml-[82%]"
            onClick={() => { handleCancel(3) }}
          >
            Close
          </Button>
        </div>
      </ReactModal>


      {/* <ReactModal
  isOpen={isModalVisible7}
  onRequestClose={() => handleCancel(7)}
  style={customStyles1}
  contentLabel="Custom Modal"
>
  <div className="py-4 px-8 bg-white rounded-lg shadow-lg">
    <h1>Data</h1>
  </div>
      </ReactModal> */}



      {/* ye cities ka he... */}
      <ReactModal
        isOpen={isModalVisible7}
        onRequestClose={() => handleCancel(7)}
        style={customStyles1}
        contentLabel="Custom Modal"
      >
        <div className="flex flex-col w-full h-full">  {/* Full modal width and height */}
          <ReloadOutlined onClick={() => gettingCities()} className='absolute left-2 top-2 text-gray-500 cursor-pointer' />
          <CloseOutlined onClick={() => handleCancel(7)} className='absolute right-2 top-2 text-gray-500 cursor-pointer' />
          <div className="flex-grow overflow-hidden"> {/* Upper section with content, hidden overflow */}
            <h1 className="text-3xl font-bold text-center mb-2">Students From Everywhere</h1>
          </div>

          <div className='mt-4 border-4 border-[#0e686efa] hover:border-[#50b6b9fa] rounded-xl h-12'>
            <InputComponent
              type="text"
              placeholder="Search"
              label=""
              value={searchTerm}
              onChange={(event) => {

                const newValue = event.target.value;

                // Capitalize the first letter of each word
                const formattedValue = newValue.replace(/\b\w/g, (char) => char.toUpperCase());

                // Update the state with the formatted name
                setSearchTerm(formattedValue)
                console.log(formattedValue)
              }} />
          </div>




          <div className="overflow-y-auto border-4 border-[#0e686efa] bg-[#e2f0f1fa] mx-auto mt-4 rounded-xl shadow-xl w-[80%] h-[70%]">
            <ul className="divide-y divide-gray-200 list-none">
              {/* Display loading message if searchTerm has a value and searchedCities are not yet available */}
              {searchTerm && !searchedCities && (
                <p className="text-center text-gray-500">Searching...</p>
              )}

              {/* Display searched cities if searchTerm has a value and searchedCities are available */}
              {searchTerm && searchedCities?.length > 0 && (
                searchedCities.map((city, index) => (
                  <li key={index} className="py-2 pl-1 pr-6 flex items-center hover:bg-[#adc7c9fa]"> {/* Classic and subtle hover effect */}
                    <span className="flex-shrink-0 h-10 w-10 ml-[5px] rounded-md focus:bg-[#e2f0f1fa]  text-white bg-gray-900 flex items-center justify-center mr-4">
                      {/* Replace with your desired Ant Design icon */}
                      {/* <Icon name="icon-name" className="h-4 w-4" /> */}
                      <Image src={img} alt='Some' />
                      {/* <Image src={img1} alt='Some' className='bg-current'/> */}
                    </span>
                    <span className="text-lg ml-3">{city._id}</span>
                    <span className="flex-shrink-0 h-6 w-6 rounded-md text-gray-900 border-2 border-[#0e686efa] flex items-center justify-center ml-auto mr-[-10px]">
                      {/* Replace with your desired Ant Design icon */}
                      {/* <Icon name="icon-name" className="h-4 w-4" /> */}
                      <EyeOutlined onClick={() => { eyeOutlinedClick(city._id) }} />
                      {/* <Image src={img1} alt='Some' className='bg-current'/> */}
                    </span>
                  </li>
                ))
              )}

              {/* Display message if searchTerm has a value but searchedCities is empty */}
              {searchTerm && searchedCities?.length === 0 && (
                <p className="text-center text-gray-500">No results found for your search.</p>
              )}

              {/* Display uniqueCities if searchTerm is empty or searchedCities are not yet available (or there's an error) */}
              {!searchTerm && ( // Use optional chaining and error stat
                uniqueCities.map((city, index) => (
                  <li key={index} className="py-2 pl-1 pr-6 flex items-center hover:bg-[#adc7c9fa]"> {/* Classic and subtle hover effect */}
                    <span className="flex-shrink-0 h-10 w-10 ml-[5px] rounded-md hover:bg-[#e2f0f1fa]  text-white bg-gray-900 flex items-center justify-center mr-4">
                      {/* Replace with your desired Ant Design icon */}
                      {/* <Icon name="icon-name" className="h-4 w-4" /> */}
                      <Image src={img} alt='Some' />
                      {/* <Image src={img1} alt='Some' className='bg-current'/> */}
                    </span>
                    <span className="text-lg ml-3">{city._id}</span>
                    <span className="flex-shrink-0 h-6 w-6 rounded-md text-gray-900 border-2 border-[#0e686efa] flex items-center justify-center ml-auto mr-[-10px]">
                      {/* Replace with your desired Ant Design icon */}
                      {/* <Icon name="icon-name" className="h-4 w-4" /> */}
                      <EyeOutlined onClick={() => { eyeOutlinedClick(city._id) }} />
                      {/* <Image src={img1} alt='Some' className='bg-current'/> */}
                    </span>
                  </li>
                ))
              )}
            </ul>
          </div>

        </div>
      </ReactModal>

      {/* ye contacts ka he... */}
      <ReactModal
        isOpen={isModalVisible10}
        onRequestClose={() => handleCancel(10)}
        style={customStyles2}
      >
        <div className="flex flex-col w-full h-full p-6">

          {/* Reload icon */}
          <ReloadOutlined onClick={() => gettingContacts()} className='absolute left-2 top-2 text-gray-500 cursor-pointer' />
          <p className='absolute left-8 top-2 text-gray-500'>{allContacts.length}</p>

          {/* Close Icon */}
          <CloseOutlined
            onClick={() => handleCancel(10)}
            className="absolute right-4 top-4 text-gray-600 cursor-pointer hover:text-red-500 transition-colors duration-300"
          />

          {/* Heading */}
          <h1 className="text-2xl font-semibold text-center mb-6 text-[#0e686e]">Manage Phone Numbers</h1>

          {/* Input Section for Adding Phone Number */}
          <div className="flex items-center mb-4 w-full">
            <Input
              placeholder="Enter phone number"
              className="h-10 w-[73%] border-2 border-[#0e686e] rounded-l-md px-4 text-gray-700 focus:ring-2 focus:ring-[#0e686e] focus:outline-none"
              type="tel"
              id="phoneInput"
              maxLength="12"
              inputMode="numeric"
              value={phoneNumber}
              onChange={handleChange2}
            />
            {/* Tick, Copy, Delete Buttons in Line */}
            <Button
              className="h-10 w-[10%] bg-[#0e686e] text-white hover:bg-[#0c5b62] transition-colors duration-300"
              onClick={!process ? handleSubmit : null}
              icon={!process ? (<CheckOutlined />) : (<LoadingOutlined />)}
            />
            <Button
              className="h-10 w-[10%] bg-[#f5f5f5] text-[#0e686e] hover:bg-gray-200 transition-colors duration-300"
              icon={<CopyOutlined />}
              onClick={copyAllPhoneNumbers} // Move the comment outside
            />
            <Button
              className="h-10 w-[10%] bg-[#f5f5f5] text-[#e74c3c] hover:bg-red-100 transition-colors duration-300 rounded-r-md"
              onClick={() => { showModal(12) }}
              icon={<DeleteOutlined />}
            />

          </div>

          {/* Phone Numbers List */}
          <div className="overflow-y-auto border-2 border-[#0e686e] bg-[#f3f7f8] mx-auto rounded-lg shadow-md w-full h-[73%] p-4">
            <ul className="divide-y divide-gray-300 list-none">
              {allContacts.length > 0 ? (
                allContacts.map((contact, index) => (
                  <li key={index} className="py-3 px-2 flex items-center justify-between hover:bg-[#e1eff0] transition-colors duration-300 rounded-md">
                    <span className="text-lg text-gray-800 font-semibold">{contact.contact}</span>
                    <span className="flex gap-4">
                      <Button
                        icon={<CopyOutlined />}
                        onClick={() => copyPhoneNumber(contact.contact)}
                        className="text-[#0e686e] hover:bg-gray-200 transition-colors duration-300"
                      />
                      <Button
                        onClick={() => { showModal(11, contact) }}
                        icon={<DeleteOutlined />}
                      />
                    </span>
                  </li>
                ))
              ) : (
                <p className="text-center text-gray-500 italic">No phone numbers available.</p>
              )}
            </ul>
          </div>
        </div>
      </ReactModal>

      {/* ye id card ka he */}
      <ReactModal
      isOpen={isModalVisible13}
      onRequestClose={() => handleCancel(13)}
      style={customStyles3}
      ariaHideApp={false}
    >
      
      {/* Left Section: Image */}
      <div className="w-[420px] bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center relative">

              {/* id card ui */}
              
               <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <div ref={idCardRef} className="relative pt-2 w-[350px] h-[500px]">
          {/* First child div for the school image */}
          <div className="mx-auto w-[180px] h-[120px] relative">
            <div className="absolute w-[177px] h-[116px] border border-gray-900">
              <Image
                src="/images/Green Minimalist School ID Card.svg"
                className="w-full h-full object-cover"
                width={600}
                height={400}
                alt="School Image"
              />
            </div>

            {/* Second child div for the rest of the ID card content */}
            <div className="absolute w-[177px] h-[116px] z-10 overflow-hidden">
              {/* User Image */}
              <Image
                className="absolute top-0 left-0 w-[24.8%] h-[44.7%] mt-[24%] ml-[6.3%]"
                alt="User-Image"
                src="/images/UBAID-RAZA.jpg"
                width={600}
                height={400}
              />

              {/* User Details */}
              <div className="absolute top-0 left-0 w-[37%] h-[35%] mt-[34.2%] ml-[53%] overflow-hidden">
                <p
                  className=" id-card-text"
                >
                  UBAID RAZA
                </p>
                <p

                  className=" id-card-text"
                >
                  TECHNO KIDS
                </p>
                <p

                  className="id-card-text"
                >
                  2
                      </p>
              </div>

              {/* User Roll Number */}
              <div className="absolute top-0 left-0 w-[20%] h-[10%] mt-[56%] ml-[18.5%] flex justify-center items-center">
                <p
                  style={{
                    color: "white",
                    fontSize: "7px",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    fontStyle: "italic",
                  }}
                  className="break-words"
                >
                  00001
                </p>
              </div>
            </div>
          </div>

          {/* Content Image Section */}
          <div className="w-[95%] h-[70%] mt-[10px] border border-gray-900 mx-auto">
            {/* Add the Content Image here */}
            {contentImage && (
              <Image
                src={contentImage}
                className="w-full h-full object-cover"
                alt="Content Image"
                width={600}
                height={400}
              />

            )}
          </div>
        </div>
      </div>

              {/* id card ui */}






        {/* <div
          className="w-[90%] h-[90%] bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden flex justify-center items-center"
        >
          <img
            src="https://via.placeholder.com/400x600" // Replace with dynamic image
            alt="Preview"
            className="w-auto h-full object-contain"
          />
        </div> */}

<ImageUploader
ratio={[1,1.04]} 
size="400px" 
formImage={contentImage} 
onImageUpload={handleImageUpload} 
reset={resetImage} 
trigger={trigger}
setTrigger={setTrigger}
/>


      </div>

      {/* Right Section: Buttons */}
      <div className="w-1/3 bg-white flex flex-col justify-between py-6 px-4 relative">
        {/* Close Button */}
        <button
          // onClick={onClose}
          className="absolute right-3 top-3 text-gray-400 hover:text-red-500 transition duration-300"
        >
          <CloseOutlined style={{ fontSize: "20px" }} />
        </button>

        {/* Header */}
        <h2 className="text-xl font-bold text-gray-800 text-center mb-4 mt-4">
          Manage Your ID Card
        </h2>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-md flex justify-center items-center"
            onClick={()=>{setTrigger(true)}}
          >
            <UploadOutlined className="mr-2 text-lg" /> Upload Image
          </button>

          <button
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md flex justify-center items-center"
            onClick={()=>{handleDownload()}}
          >
            {downloading?null : <DownloadOutlined className="mr-2 text-lg" />} {downloading?"Downloading..." :"Download ID Card"}
          </button>

          <button
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-md flex justify-center items-center"
            onClick={()=>{handleRemoveImage()}}
          >
            <DeleteOutlined className="mr-2 text-lg" /> Remove Image
          </button>

          <button
            className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 rounded-lg hover:from-gray-900 hover:to-black transition-all shadow-md flex justify-center items-center"
            onClick={()=>{updateContentImage(content._id)}}
          >
            {updatingContent? null : <CheckOutlined className="mr-2 text-lg" />} {updatingContent? "Wait...":"Done"}
          </button>
        </div>
      </div>
    </ReactModal>


          {/* Ye main page pr frontImage ka he */}
          <ReactModal
  isOpen={isModalVisible14}
  onRequestClose={() => handleCancel(14)}
  style={{
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: 1000,
    },
    content: {
      width: "600px",
      height: "450px",
      margin: "auto",
      borderRadius: "15px",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  }}
  ariaHideApp={false}
>
  {/* Header */}
  <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
    Upload & Update Info Image
  </h2>

  {/* Uploader Section */}
  <div className="flex flex-col items-center justify-center w-full h-[70%]">
      <ImageUploader 
      ratio={[1714.2857, 1000]} 
      size="300px"
      reset={resetInfoImage}
      formImage={infoImage}
      onImageUpload={handleInfoImageUpload}
       />
    <p className="text-sm text-gray-500 mt-2">
      Upload an image with a 1714:1000 ratio for the best fit.
    </p>
  </div>

  {/* Modal Buttons */}
  <div className="flex space-x-4 mt-6">
  <button
      className="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition focus:outline-none"
      onClick={()=>{handleRemoveInfoImage()}} // Replace with your save logic
    >
      Remove
    </button>
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition focus:outline-none"
      onClick={()=>{updateInfoImage(admin._id, infoImage)}} // Replace with your save logic
    >
      {saving?"Saving..": "Save"}
    </button>
    <button
      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition focus:outline-none"
      onClick={() => handleCancel(14)}
    >
      Close
    </button>
  </div>
</ReactModal>





      <BatchModal isOpen={isModalVisible4} onClose={() => { handleCancel(4) }} user={currentUser} />
      <AdmissionModal isOpen={isModalVisible5} onClose={() => { handleCancel(5) }} user={currentUser} />
      <DeleteModal isOpen={isModalVisible6} onClose={() => { handleCancel(6) }} user={currentUser} />
      <DeleteContactModal isOpen={isModalVisible11} onClose={() => { handleCancel(11) }} user={currentContact} />
      <DeleteAllContactModal isOpen={isModalVisible12} onClose={() => { handleCancel(12) }} />
      <DownloadModal isOpen={isModalVisible9} onClose={() => { handleCancel(9) }} />

    </Layout>
  );
};

export default SideNavbarComponent;


