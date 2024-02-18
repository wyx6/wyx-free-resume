// import http from '../request'
import request from '@/utils/request'

export const modifyTemplateJson: any = (resumeJson, key) =>
  request({
    url: `/resume/modify_resume`,
    method: 'post',
    data: { resumeJson, key }
  })
