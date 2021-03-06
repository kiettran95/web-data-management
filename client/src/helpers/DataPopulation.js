import React, {PropTypes} from 'react';
import axios from 'axios';


export function getOwnerProperties(Username) {
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getOwnerProperties/${Username}`)
    .then(function (res) {
      if (res.data.Error) {
        reject(res.data.Error)
      } else {
        resolve(res.data.properties);
      }
    })
  })
}

export function getOwnerOtherProperties(Username) {
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getOwnerOtherProperties/${Username}`)
    .then(function (res) {
      if (res.data.Error) {
        reject(res.data.Error)
      } else {
        resolve(res.data.properties);
      }
    })
  })
}


export function getAllProperties() {
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getAllProperties`)
    .then(function (res) {
      console.log("HElloooo");

      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        // console.log(res);
        // var data = JSON.parse(res.data.properties);
        console.log(res.data.properties);
        resolve(res.data.properties);
      }
    })
  })
}


export function getAllVisitor() {
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getVisitors`)
    .then(function (res) {

      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        resolve(res.data.visitors);
      }
    })
  })
}



export function getAllOwner() {
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getAllOwner`)
    .then(function (res) {

      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        resolve(res.data.visitors);
      }
    })
  })
}


export function getApprovedItems() {
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getApprovedItems`)
    .then(function (res) {

      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        resolve(res.data.visitors);
      }
    })
  })
}




export function getPendingItems() {
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getPendingItems`)
    .then(function (res) {

      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        resolve(res.data.visitors);
      }
    })
  })
}






export function getFarmItems() {
  console.log('function is running => ');
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getFarmItem/`)
    .then(function (res) {
      console.log("HElloooo");

      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        console.log(res.data.properties);
        resolve(res.data.properties);
      }
    })
  })
}



export function getConfirmedProperties() {
  return new Promise(function(resolve, reject) {
    console.log(' runnung getUnconfirmedProperties');

    axios.get(`/populate/getConfirmedProperties/`)
    .then(function (res) {

      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        console.log('res of get cf prop => ',res);
        console.log(res.data.property);
        resolve(res.data.property);
      }
    })
  })
}



export function getUnconfirmedProperties() {
  return new Promise(function(resolve, reject) {
    console.log(' runnung unconfirmedddd ');
    axios.get(`/populate/getUnconfirmedProperties/`)
    .then(function (res) {

      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        console.log(res.data.property);
        resolve(res.data.property);
      }
    })
  })
}


export function getPropertyItems(propertyID) {
  console.log('function is running => ');
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getProperty/${propertyID}`)
    .then(function (res) {
      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        console.log(res.data.properties);
        console.log('res.data.propInfo => ',res.data.propInfo);

        resolve([res.data.properties, res.data.propInfo, res.data.farmItems]);
      }
    })
  })
}


export function getVisitHistory(Username) {
  console.log('Visitor is ', Username);
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getVisitHistory/${Username}`)
    .then(function (res) {
      console.log("Ahihihihihihiiiiiii");
      console.log(res);
      console.log('res.data => ',res.data);
      console.log('res.data.Error => ',res.data.Error);
      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        resolve(res.data.visitHistory);
      }
    })
  })
}

export function getLogHistory(Username, PropID) {
  console.log('Visitor is ', Username);
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getLogHistory/${Username}/${PropID}`)
    .then(function (res) {
      console.log("Ahihihihihihiiiiiii");
      console.log(res);
      console.log('res.data => ',res.data);
      console.log('res.data.Error => ',res.data.Error);
      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        console.log('res => ',res);
        resolve(res.data.visitLog);
      }
    })
  })
}

export function getDetailProperty(name) {
  console.log('function getDetailProperty is running => ');
  console.log('Property is ', name);
  return new Promise(function(resolve, reject) {
    axios.get(`/populate/getDetailProperty/${name}`)
    .then(function (res) {
      console.log("asdkadfbs");

      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        reject(res.data.Error)
      } else {
        // console.log(res);
        // var data = JSON.parse(res.data.properties);
        console.log(res.data.detailProperty);
        resolve([res.data.detailProperty, res.data.animals, res.data.crops]);
      }
    })
  })
}

// export function getVisitHistory(Username) {
//   console.log('function getVisitHistory is running => ');
//   console.log('Visitor is ', Username);
//   return new Promise(function(resolve, reject) {
//     axios.get(`/populate/getVisitHistory/${Username}`)
//     .then(function (res) {
//       console.log("Ahihihihihihiiiiiii");

//       if (res.data.Error) {
//         console.log('res.data.errors => ',res.data.errors);
//         reject(res.data.Error)
//       } else {
//         // console.log(res);
//         // var data = JSON.parse(res.data.properties);
//         console.log(res.data.properties);
//         resolve(res.data.properties);
//       }
//     })
//   })
// }


// export function getDetailProperty(name) {
//   console.log('function getDetailProperty is running => ');
//   console.log('Property is ', Username);
//   return new Promise(function(resolve, reject) {
//     axios.get(`/populate/getDetailProperty/${name}`)
//     .then(function (res) {
//       console.log("Ahihihihihihiiiiiii");

//       if (res.data.Error) {
//         console.log('res.data.errors => ',res.data.errors);
//         reject(res.data.Error)
//       } else {
//         // console.log(res);
//         // var data = JSON.parse(res.data.properties);
//         console.log(res.data.properties);
//         resolve(res.data.properties);
//       }
//     })
//   })
// }
