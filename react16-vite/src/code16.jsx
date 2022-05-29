// // 原始 list 如下
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
// const result = convert(list, ...);

// // 转换后的结果如下
// let result = [
//     {
//       id: 1,
//       name: '部门A',
//       parentId: 0,
//       children: [
//         {
//           id: 3,
//           name: '部门C',
//           parentId: 1,
//           children: [
//             {
//               id: 6,
//               name: '部门F',
//               parentId: 3
//             }, {
//               id: 16,
//               name: '部门L',
//               parentId: 3
//             }
//           ]
//         },
//         {
//           id: 4,
//           name: '部门D',
//           parentId: 1,
//           children: [
//             {
//               id: 8,
//               name: '部门H',
//               parentId: 4
//             }
//           ]
//         }
//       ]
//     },
//   ···
// ];


function convert(list) {
    const res = []; // 结果
    // 遍历处理
    const map = list.reduce((prev, item) => {
        prev[item.id] = item
        return prev
    }, {})
    // 生成一个对象
    for (const item of list) {
        // 如果parentId === 0 那么直接push进去
        if (item.parentId === 0) {
            res.push(item)
        } else {
            // 如果不是就在map中找到他们的父亲节点
            const parent = map[item.parentId];
            // 如果为空的的话就传入一个空数组
            parent.children = parent.children || [];
            // 把当前的子节点放到父节点的children属性里
            parent.children.push(item);
        }
    }
    return res;
}
convert(list);
// 写递归遍历查找性能会很差

console.log(convert(list), 'result')

export default  list;