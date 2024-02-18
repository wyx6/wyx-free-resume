import http from '../request'
import request from '@/utils/request'

export const getTemplateJson: any = (url: string) => {
  return http.request({
    url: url,
    method: 'get'
  })
}

// export const getTemplateJson: any = (id) =>
//   request({ url: `/resume_template/${id}`, method: 'get' })
