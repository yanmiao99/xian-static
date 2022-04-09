const classList = document.querySelectorAll('.classification>a>span')
const tag = document.querySelector(".tag")

const allData = [
    '自哲游',
    '家庭游',
    '亲子游',
    '爱拍客',
    '美食家',
    '背包客',
    '悦U生活',
    '陕西故事',
    '掌上回坊',
    '出境游',
    '一日游',
    '秋游',
    '诗词游',
    '研学游',
    '采摘游',
    '佛文化之旅',
    '春节游',
    '民俗体验游',
    '文创',
    '周未游',
    '其他',
    '消夏避暑游',
    '毕业游',
    '五日游',
    '夜游',
    '黄河旅游带',
    '话剧',
    '舞台剧',
    '博物馆游',
    '体验游',
    '红色旅游',
    '乡村旅游',
    '深秋游',
    '滑雪泡汤',
    '西安古城游',
    '西安古城游',
    '古城游',
    '古镇游',
    '三日游',
    '二日游',
    '在线游',
    '华夏文创',
    '踏青游',
    '文旅抗疫',
    '非遇体验',
    '西安美食',
    '东游',
    '山岳旅游',
    '看展游',
]
const classOneData = [
    '自哲游',
    '家庭游',
    '亲子游',
    '爱拍客',
    '美食家',
    '背包客',
    '悦U生活',
    '陕西故事',
    '掌上回坊',
    '出境游',
    '一日游',
    '秋游',
    '诗词游',
    '研学游',
    '采摘游',
    '佛文化之旅',
    '春节游',
    '民俗体验游',
    '文创',
    '周未游',
    '其他',
]

function createTag(data) {
    data.forEach(item => {
        let a = document.createElement('a')
        a.href = '#'
        let span = document.createElement('span')
        span.innerHTML = item
        a.appendChild(span)
        tag.appendChild(a)
    })
}

// let obj = {
//     '全部': () => {
//         return createTag(allData)
//     },
//     '文史千载': () => {
//         return createTag(classOneData)
//     }
// }

let active = 0

classList.forEach((item, index) => {
    item.addEventListener('click', () => {
        tag.innerHTML = ''

        // obj[item.innerHTML]()

        if (item.innerHTML === '全部') {
            createTag(allData)
        } else if (item.innerHTML === '文史千载') {
            createTag(classOneData)
        }


        classList[active].classList.remove("active")
        classList[index].classList.add("active")
        active = index
    })
})

