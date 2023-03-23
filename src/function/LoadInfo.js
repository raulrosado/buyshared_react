function LoadInfo(contenido){
  localStorage.setItem('buyshare', JSON.stringify(contenido)); //? guardar la info en la localstorage
}

export default LoadInfo;