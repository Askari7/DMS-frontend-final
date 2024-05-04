// Storage.js

// Save data to a cookie
export const saveData = (key, newData) => {
    // Load existing data from the cookie
    const existingData = loadData(key) || {};
  
    // Merge existing data with new data
    const mergedData = { ...existingData, ...newData };
  
    // Save the merged data to the cookie
    document.cookie = `${key}=${JSON.stringify(mergedData)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  };
  
  // Load data from a cookie
  export const loadData = (key) => {
    const cookieData = document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith(`${key}=`));
  
    return cookieData ? JSON.parse(cookieData.split('=')[1]) : null;
  };
  
  // Get all keys from cookies
  export const getAllKeys = (prefix) => {
    return document.cookie
      .split('; ')
      .map((cookie) => cookie.split('=')[0])
      .filter((key) => key.startsWith(prefix));
  };
  