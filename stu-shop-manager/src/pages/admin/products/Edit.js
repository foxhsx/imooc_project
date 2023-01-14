import { Button, Card, Form, Input, message, Upload } from 'antd'
import React, { useEffect, useState } from 'react'
import { createApi, getOneId, modifyOne } from '../../../service/api'
import { useNavigate, useParams } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons'
import { serverUrl } from '../../../utils';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';

function Edit() {
  const nagivate = useNavigate();
  const params = useParams();
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState('')
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const back = () => nagivate('/admin/products')
  const handleSubmit = (value) => {
    const content = stateToHTML(editorState.getCurrentContent())
    const submitData = { ...value, coverImg: imageUrl, content }
    let request = () => createApi(submitData);
    let successTips = '添加成功'
    if (params?.id) {
      request = () => modifyOne(params.id, submitData);
      successTips = '更新成功'
    }
    request().then(res => {
      back();
      message.success(successTips)
    })
  }

  const priceValidate = (rule, value) => {
    if (isNaN(parseFloat(value))) {
      return Promise.reject(new Error('请输入数字'))
    } else {
      return Promise.resolve()
    }
  }

  const uploadImg = (info) => {
    if (info.file.status === 'done') {
      setImageUrl(info.file.response.info)
    }
  }

  const editorChange = (value) => {
    setEditorState(value)
  }

  useEffect(() => {
    if (params?.id) {
      getOneId(params.id).then(({ name, price, coverImg, content }) => {
        form.setFieldsValue({ name, price });
        setImageUrl(coverImg)
        const contentState = stateFromHTML(content);
        setEditorState(EditorState.createWithContent(contentState))
      })
    }
  }, [params, form])

  return (
    <Card title="商品编辑" extra={<Button onClick={back}>返回</Button>}>
      <Form onFinish={handleSubmit} form={form}>
        <Form.Item
          label="名字" name="name" rules={[{ required: true, message: '请输入商品名称' }]}
        >
          <Input placeholder="请输入商品名字" />
        </Form.Item>
        <Form.Item label="价格" name="price" rules={[
          { required: true, message: '请输入商品价格' },
          { validator: priceValidate }
          ]}>
          <Input placeholder="请输入商品价格" />
        </Form.Item>
        <Form.Item label="主图">
          <Upload
            name='file'
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action={`${serverUrl}/api/v1/common/file_upload`}
            onChange={uploadImg}
          >
            { imageUrl
              ? <img src={serverUrl + imageUrl} alt="avatar" style={{ width: '100%' }} />
              : <Button icon={<UploadOutlined />}>Upload</Button> }
          </Upload>
        </Form.Item>
        <Form.Item label="详情">
          <Editor editorState={editorState} onChange={editorChange} />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' type="primary">保存</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Edit