const IMPORT_JSON = {
  ID: 'e1046007-ef74-4e9e-bec8-5245911ec407',
  NAME: 'custom',
  TITLE: '模板标题',
  LAYOUT: 'classical',
  COMPONENTS: [
    {
      keyId: '4d2fe104-2b78-4d07-b9af-7a640ea052ef',
      model: 'RESUME_TITLE',
      cptName: 'RESUME_TITLE_1',
      cptOptionsName: 'RESUME_TITLE_OPTIONS',
      cptTitle: '简历标题',
      cptX: 0,
      cptY: 0,
      cptZ: 0,
      cptHeight: '100px',
      cptWidth: '100%',
      layout: '',
      show: true,
      style: {
        themeColor: '#000',
        firstTitleFontSize: '20px',
        titleColor: '#121c26',
        titleFontSize: '30px',
        titleFontWeight: 500,
        textColor: '#fff',
        textFontSize: '16px',
        textFontWeight: 600,
        backgroundColor: '#000',
        mBottom: '35px',
        mTop: '15px',
        pTopBottom: '0',
        pLeftRight: '0'
      },
      data: {
        iconfont: 'icon-xiangmujingli-04',
        model: 'RESUME_TITLE',
        show: true,
        title: '我的简历'
      }
    },
    {
      keyId: 'a7ce2355-29dc-46c5-ba4e-b0a4be12ef39',
      model: 'BASE_INFO',
      cptName: 'BASE_INFO_1',
      cptOptionsName: 'BASE_INFO_OPTIONS',
      cptTitle: '基础资料',
      cptX: 0,
      cptY: 0,
      cptZ: 0,
      cptHeight: '100px',
      cptWidth: '100%',
      layout: '',
      show: true,
      style: {
        themeColor: '#000',
        firstTitleFontSize: '20px',
        titleColor: '#121c26',
        titleFontSize: '30px',
        textFontSize: '14px',
        titleFontWeight: 500,
        textFontWeight: 500,
        textColor: '#7c7b7b',
        backgroundColor: '',
        mBottom: '50px',
        mTop: '0px',
        pTopBottom: '0',
        pLeftRight: '40px'
      },
      data: {
        iconfont: 'icon-jibenziliao',
        model: 'BASE_INFO',
        show: true,
        title: '基本资料',
        name: '小希想学前端',
        age: 25,
        address: '四川成都',
        avatar:
          'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        workService: 3,
        phoneNumber: '028-1234321',
        email: '12322233@qq.com',
        abstract: '我是一个没有感情的工作机器',
        degree: '本科',
        isShow: {
          age: true,
          address: true,
          avatar: true,
          workService: true,
          phoneNumber: true,
          email: true,
          abstract: true,
          degree: true
        }
      }
    },
    {
      keyId: 'a751299f-4efd-46e0-a385-01908b1e38b8',
      model: 'JOB_INTENTION',
      cptName: 'JOB_INTENTION_1',
      cptOptionsName: 'JOB_INTENTION_OPTIONS',
      cptTitle: '求职意向',
      cptX: 0,
      cptY: 0,
      cptZ: 0,
      cptHeight: '100px',
      cptWidth: '100%',
      layout: '',
      show: true,
      style: {
        themeColor: '#000',
        firstTitleFontSize: '20px',
        titleColor: '#121c26',
        titleFontSize: '30px',
        titleFontWeight: 500,
        textColor: '#757575',
        textFontSize: '14px',
        textFontWeight: 500,
        backgroundColor: '',
        mBottom: '35px',
        mTop: '0px',
        pTopBottom: '0',
        pLeftRight: '40px'
      },
      data: {
        iconfont: 'icon-yixianggangwei',
        model: 'JOB_INTENTION',
        show: true,
        title: '求职意向',
        intendedPositions: '前端开发工程师',
        intendedCity: '成都',
        expectSalary: '8000-10000',
        jobStatus: '随时入职',
        jobSearchType: '求职类型',
        isShow: {
          intendedPositions: true,
          intendedCity: true,
          expectSalary: true,
          jobStatus: true,
          jobSearchType: true
        }
      }
    },
    {
      keyId: '4df16fa9-ca47-4769-ad6a-f487d0ab468c',
      model: 'EDU_BACKGROUND',
      cptName: 'EDU_BACKGROUND_1',
      cptOptionsName: 'EDU_BACKGROUND_OPTIONS',
      cptTitle: '教育背景',
      cptX: 0,
      cptY: 0,
      cptZ: 0,
      cptHeight: '50px',
      cptWidth: '100%',
      layout: '',
      show: true,
      style: {
        themeColor: '#000',
        firstTitleFontSize: '20px',
        textColor: '#757575',
        textFontSize: '14px',
        textFontWeight: 500,
        titleColor: '#666666',
        titleFontSize: '14px',
        titleFontWeight: 600,
        backgroundColor: '#000',
        mBottom: '35px',
        mTop: '0px',
        pTopBottom: '0',
        pLeftRight: '40px'
      },
      data: {
        iconfont: 'icon-education-1-copy',
        model: 'EDU_BACKGROUND',
        show: true,
        title: '教育背景',
        LIST: [
          {
            date: ['2015-5', '2019-6'],
            schoolName: '野鸡大学',
            specialized: '通信工程',
            degree: '本科',
            majorCourse: '主修计算机技术、Java、c++等等'
          },
          {
            date: ['2015-5', '2019-6'],
            schoolName: '野鸡大学',
            specialized: '通信工程',
            degree: '本科',
            majorCourse: '主修计算机技术、Java、c++等等'
          }
        ],
        isShow: {
          date: true,
          schoolName: true,
          specialized: true,
          degree: true,
          majorCourse: true
        }
      }
    },
    {
      keyId: '13c150ca-1688-4627-a683-9dcef91276f8',
      model: 'SKILL_SPECIALTIES',
      cptName: 'SKILL_SPECIALTIES_1',
      cptOptionsName: 'SKILL_SPECIALTIES_OPTIONS',
      cptTitle: '技能特长',
      cptX: 0,
      cptY: 0,
      cptZ: 0,
      cptHeight: '50px',
      cptWidth: '100%',
      layout: '',
      show: true,
      style: {
        themeColor: '#000',
        firstTitleFontSize: '20px',
        textColor: '#757575',
        textFontSize: '14px',
        textFontWeight: 500,
        titleColor: '#666666',
        titleFontSize: '14px',
        titleFontWeight: 600,
        backgroundColor: '#000',
        mBottom: '35px',
        mTop: '0px',
        pTopBottom: '0',
        pLeftRight: '40px'
      },
      data: {
        iconfont: 'icon-zhuanyezhishijineng',
        model: 'SKILL_SPECIALTIES',
        show: true,
        title: '技能特长',
        LIST: [
          {
            skillName: 'JavaScript',
            proficiency: '了解',
            introduce: '熟练掌握该项技术'
          },
          {
            skillName: 'JavaScript',
            proficiency: '一般',
            introduce:
              '熟练掌握该项技术熟练掌握该项技术熟练掌握该项技术熟练掌握该项技术'
          },
          {
            skillName: 'JavaScript',
            proficiency: '熟悉',
            introduce:
              '熟练掌握该项技术熟练掌握该项技术熟练掌握该项技术熟练掌握该项技术'
          },
          {
            skillName: 'JavaScript',
            proficiency: '精通',
            introduce: '熟练掌握该项技术'
          }
        ]
      }
    },
    {
      keyId: '905d2b8a-be5f-4cd3-b5bd-680ef9b43d56',
      model: 'CAMPUS_EXPERIENCE',
      cptName: 'CAMPUS_EXPERIENCE_1',
      cptOptionsName: 'CAMPUS_EXPERIENCE_OPTIONS',
      cptTitle: '校园经历',
      cptX: 0,
      cptY: 0,
      cptZ: 0,
      cptHeight: '50px',
      cptWidth: '100%',
      layout: '',
      show: true,
      style: {
        themeColor: '#000',
        firstTitleFontSize: '20px',
        textColor: '#757575',
        textFontSize: '14px',
        textFontWeight: 500,
        titleColor: '#666666',
        titleFontSize: '14px',
        titleFontWeight: 600,
        backgroundColor: '#000',
        mBottom: '35px',
        mTop: '0px',
        pTopBottom: '0',
        pLeftRight: '40px'
      },
      data: {
        iconfont: 'icon-jiatimianban_timu',
        model: 'CAMPUS_EXPERIENCE',
        show: true,
        title: '校园经历',
        LIST: [
          {
            date: ['2021-9', '2022-10'],
            campusBriefly: '经历简要，如社团名称',
            campusDuty: '主要职责',
            campusContent: '经历描述'
          },
          {
            date: ['2021-9', '2022-10'],
            campusBriefly: '经历简要，如社团名称',
            campusDuty: '主要职责',
            campusContent:
              '经历经历描述经历描述经历描经历描述经历描述经历描述经历描述经历描述述经历描述经历描述经历描述经历描述经历描述描述'
          }
        ],
        isShow: {
          date: true,
          campusBriefly: true,
          campusDuty: true,
          campusContent: true
        }
      }
    },
    {
      keyId: '54ec26a4-5e34-4fb7-9477-f7ce35edfe40',
      model: 'INTERNSHIP_EXPERIENCE',
      cptName: 'INTERNSHIP_EXPERIENCE_1',
      cptOptionsName: 'INTERNSHIP_EXPERIENCE_OPTIONS',
      cptTitle: '实习经验',
      cptX: 0,
      cptY: 0,
      cptZ: 0,
      cptHeight: '50px',
      cptWidth: '100%',
      layout: '',
      show: true,
      style: {
        themeColor: '#000',
        firstTitleFontSize: '20px',
        textColor: '#757575',
        textFontSize: '14px',
        textFontWeight: 500,
        titleColor: '#666666',
        titleFontSize: '14px',
        titleFontWeight: 600,
        backgroundColor: '#000',
        mBottom: '35px',
        mTop: '0px',
        pTopBottom: '0',
        pLeftRight: '40px'
      },
      data: {
        iconfont: 'icon-biyeshixi',
        model: 'INTERNSHIP_EXPERIENCE',
        show: true,
        title: '实习经验',
        LIST: [
          {
            date: ['2021-9', '2022-10'],
            companyName: '业绩公司',
            posts: '前端开发工程师',
            jobContent: [
              {
                content: '主要工作内容是打杂'
              },
              {
                content:
                  '主要工作内容是打杂主要工作内容是打杂主要工作内容是打杂主要工作内容是打杂主要工作内容是打杂'
              },
              {
                content: '主要工作内容是打杂'
              }
            ]
          },
          {
            date: ['2021-9', '2022-10'],
            companyName: '业绩公司',
            posts: '前端开发工程师',
            jobContent: [
              {
                content: '主要工作内容是打杂'
              },
              {
                content:
                  '主要工作内容是打杂主要工作内容是打杂主要工作内容是打杂主要工作内容是打杂主要工作内容是打杂'
              },
              {
                content: '主要工作内容是打杂'
              }
            ]
          }
        ],
        isShow: {
          date: true,
          companyName: true,
          posts: true,
          jobContent: true
        }
      }
    },
    {
      keyId: 'c7502257-9bde-4d2a-a032-e9dfd035b603',
      model: 'WORK_EXPERIENCE',
      cptName: 'WORK_EXPERIENCE_1',
      cptOptionsName: 'WORK_EXPERIENCE_OPTIONS',
      cptTitle: '工作经验',
      cptX: 0,
      cptY: 0,
      cptZ: 0,
      cptHeight: '50px',
      cptWidth: '100%',
      layout: '',
      show: true,
      style: {
        themeColor: '#000',
        firstTitleFontSize: '20px',
        textColor: '#757575',
        textFontSize: '14px',
        textFontWeight: 500,
        titleColor: '#666666',
        titleFontSize: '14px',
        titleFontWeight: 600,
        backgroundColor: '#000',
        mBottom: '35px',
        mTop: '0px',
        pTopBottom: '0',
        pLeftRight: '40px'
      },
      data: {
        iconfont: 'icon-gongzuojingyan',
        model: 'WORK_EXPERIENCE',
        show: true,
        title: '工作经验',
        LIST: [
          {
            date: ['2021-9', '2022-10'],
            companyName: '业绩公司',
            posts: '前端开发工程师',
            jobContent: [
              {
                content: '主要工作内容是打杂'
              }
            ]
          }
        ],
        isShow: {
          date: true,
          companyName: true,
          posts: true
        }
      }
    },
    {
      keyId: 'd2e839ff-4b6a-474c-b224-7326ad7adc83',
      model: 'PROJECT_EXPERIENCE',
      cptName: 'PROJECT_EXPERIENCE_1',
      cptOptionsName: 'PROJECT_EXPERIENCE_OPTIONS',
      cptTitle: '项目经验',
      cptX: 0,
      cptY: 0,
      cptZ: 0,
      cptHeight: '50px',
      cptWidth: '100%',
      layout: '',
      show: true,
      style: {
        themeColor: '#000',
        firstTitleFontSize: '20px',
        textColor: '#757575',
        textFontSize: '14px',
        textFontWeight: 500,
        titleColor: '#666666',
        titleFontSize: '14px',
        titleFontWeight: 600,
        backgroundColor: '#000',
        mBottom: '35px',
        mTop: '0px',
        pTopBottom: '0',
        pLeftRight: '40px'
      },
      data: {
        iconfont: 'icon-xiangmu',
        model: 'PROJECT_EXPERIENCE',
        show: true,
        title: '项目经验',
        LIST: [
          {
            date: ['2021-9', '2022-10'],
            projectName: '项目名称',
            posts: '前端开发工程师',
            projectContent: [
              {
                content: '该项目是一个打杂项目'
              }
            ]
          }
        ],
        isShow: {
          date: true,
          projectName: true,
          posts: true
        }
      }
    },
    {
      keyId: 'd8ec62da-4ff0-4d1f-9142-28cc82502ce7',
      model: 'AWARDS',
      cptName: 'AWARDS_1',
      cptOptionsName: 'AWARDS_OPTIONS',
      cptTitle: '荣誉奖项',
      cptX: 0,
      cptY: 0,
      cptZ: 0,
      cptHeight: '50px',
      cptWidth: '100%',
      layout: '',
      show: true,
      style: {
        themeColor: '#000',
        firstTitleFontSize: '20px',
        textColor: '#757575',
        textFontSize: '14px',
        textFontWeight: 500,
        titleColor: '#666666',
        titleFontSize: '14px',
        titleFontWeight: 600,
        backgroundColor: '#000',
        mBottom: '35px',
        mTop: '0px',
        pTopBottom: '0',
        pLeftRight: '40px'
      },
      data: {
        iconfont: 'icon-rongyu1',
        model: 'AWARDS',
        show: true,
        title: '荣誉奖项',
        LIST: [
          {
            date: '2021-9',
            awardsName: '奖项名称',
            awardsGrade: '获奖等级'
          }
        ],
        isShow: {
          date: true,
          awardsName: true,
          awardsGrade: true
        }
      }
    },
    {
      keyId: 'f64bc4a6-922e-40c5-ac4d-cb66c154a634',
      model: 'HOBBIES',
      cptName: 'HOBBIES_1',
      cptOptionsName: 'HOBBIES_OPTIONS',
      cptTitle: '兴趣爱好',
      cptX: 0,
      cptY: 0,
      cptZ: 0,
      cptHeight: '50px',
      cptWidth: '100%',
      layout: '',
      show: true,
      style: {
        themeColor: '#000',
        firstTitleFontSize: '20px',
        textColor: '#757575',
        textFontSize: '14px',
        textFontWeight: 500,
        titleColor: '#666666',
        titleFontSize: '14px',
        titleFontWeight: 600,
        backgroundColor: '#000',
        mBottom: '35px',
        mTop: '0px',
        pTopBottom: '0',
        pLeftRight: '40px'
      },
      data: {
        iconfont: 'icon-xingquaihao',
        model: 'HOBBIES',
        show: true,
        title: '兴趣爱好',
        content:
          '我喜欢打杂我喜欢打杂我喜欢打杂我喜欢打杂我喜欢打杂我喜欢打杂我喜欢打杂我喜欢打杂',
        style: {
          textColor: '#757575',
          textFontSize: '14px',
          textFontWeight: 500,
          mBottom: '45px',
          mTop: '0px'
        }
      }
    },
    {
      keyId: 'c7d6086e-bc45-4258-98ff-55986e6b650a',
      model: 'SELF_EVALUATION',
      cptName: 'SELF_EVALUATION_1',
      cptOptionsName: 'SELF_EVALUATION_OPTIONS',
      cptTitle: '自我评价',
      cptX: 0,
      cptY: 0,
      cptZ: 0,
      cptHeight: '50px',
      cptWidth: '100%',
      layout: '',
      show: true,
      style: {
        themeColor: '#000',
        firstTitleFontSize: '20px',
        textColor: '#757575',
        textFontSize: '14px',
        textFontWeight: 500,
        titleColor: '#666666',
        titleFontSize: '14px',
        titleFontWeight: 600,
        backgroundColor: '#000',
        mBottom: '35px',
        mTop: '0px',
        pTopBottom: '0',
        pLeftRight: '40px'
      },
      data: {
        iconfont: 'icon-ziwopingjia',
        model: 'SELF_EVALUATION',
        show: true,
        title: '自我评价',
        content: '我是一个没有责任感的人'
      }
    },
    {
      keyId: '8d22d6d8-241a-4f3c-bd36-0b9c434984ae',
      model: 'WORKS_DISPLAY',
      cptName: 'WORKS_DISPLAY_1',
      cptOptionsName: 'WORKS_DISPLAY_OPTIONS',
      cptTitle: '作评展示',
      cptX: 0,
      cptY: 0,
      cptZ: 0,
      cptHeight: '50px',
      cptWidth: '100%',
      layout: '',
      show: true,
      style: {
        themeColor: '#000',
        firstTitleFontSize: '20px',
        textColor: '#757575',
        textFontSize: '14px',
        textFontWeight: 500,
        titleColor: '#666666',
        titleFontSize: '14px',
        titleFontWeight: 600,
        backgroundColor: '#000',
        mBottom: '35px',
        mTop: '0px',
        pTopBottom: '0',
        pLeftRight: '40px'
      },
      data: {
        iconfont: 'icon-zhuanyezhishijineng',
        model: 'WORKS_DISPLAY',
        show: true,
        title: '作品展示',
        LIST: [
          {
            worksName: '作品名称',
            worksLink: 'https://www.baidu.com',
            worksIntroduce: '这是一个千万级作品'
          },
          {
            worksName: '作品名称',
            worksLink: 'https://www.baidu.com',
            worksIntroduce: '这是一个千万级作品'
          }
        ]
      }
    }
  ],
  GLOBAL_STYLE: {
    themeColor: '#079cfa',
    firstTitleFontSize: '20px',
    secondTitleFontSize: '14px',
    textFontSize: '14px',
    secondTitleColor: '#666',
    textFontColor: '#757575',
    secondTitleWeight: 600,
    textFontWeight: 500,
    pTopBottom: '0',
    pLeftRight: '40px',
    modelMarginTop: '0px',
    modelMarginBottom: '45px',
    leftWidth: '',
    rightWidth: '',
    leftThemeColor: '',
    rightThemeColor: ''
  }
}
export default IMPORT_JSON
