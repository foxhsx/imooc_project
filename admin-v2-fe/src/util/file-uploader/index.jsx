import React from 'react';
import FileUpload from './FileUpload.jsx';

class FileUploader extends React.Component {
  constructor () {
    super()
  }
  render(){
    const options={
      baseUrl:'/manage/product/upload.do',
      fileFieldName: 'upload_file',
      dataType: 'json',
      chooseAndUpload: true,
      uploadSuccess: this.props.onSuccess,
      uploadError: this.props.onError
    }	
    return (
      <FileUpload options={options}>
        <button className="btn btn-xs btn-default" ref="chooseAndUpload">请选择图片</button>
      </FileUpload>
    )        
  }
}

export default FileUploader;
