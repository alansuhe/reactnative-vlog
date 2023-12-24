import { StyleSheet } from "react-native";

// --- 将来考虑响应式
export const Sizes = {
    cm: 16, // 标准尺度，常用字体大小
    scm: 8, // 较小尺度，padding, margin边距调整
    bcm: 32, // 较大尺度，标题字体大小
    mcm: 4, // min 最小尺度，小按钮边距等
    xcm: 64 // max 最大尺度
}

const { cm, bcm, scm, mcm, xcm } = Sizes

// 将来Themed，至少分dark, light, perfer dark as default
export const Colors = {
    bg: '#333333', // 底色
    mid: '#666666', // 中间背景色
    front: '#FEFEFE', // 前景色，primary
    sub: '#CDCDCD', // 副前景色
    link: 'deepskyblue', // 连接色，用于外部资源，或则场景跳转
    act: 'coral', // interactive互动，用于本场景的互动
    warn: 'tomato', // 警告色
    emphasis: 'lightseagreen' // 强调色，祝贺
}

const { front, bg, mid, sub, link, warn, act, emphasis } = Colors

// react navigation colors
export const NavColors = {
    primary: front,
    background: bg,
    card: mid,
    text: sub
}

// styles ---- basic elements
export const s = StyleSheet.create({
    container: { flex: 1, backgroundColor: bg },
    row: { flexDirection: 'row', gap: scm },
    margin: { margin: cm },
    padding: { padding: cm },
    radius: { borderRadius: cm },
    centered: { justifyContent: 'center', alignItems: 'center' },
    // text standards
    normalText: { color: front, fontSize: cm },
    subText: { color: sub, fontSize: cm - 2 },
    titleText: { color: front, fontSize: bcm },
    subTitleText: { color: sub, fontSize: bcm - 8 },
    //
    box: { backgroundColor: mid, padding: mcm, borderRadius: mcm },
    borderbox: { padding: mcm, borderRadius: mcm, borderColor: sub, borderWidth: StyleSheet.hairlineWidth }
})

// style array ---- 组合
export const sc = {
    card: [s.radius, s.padding, s.margin, { backgroundColor: mid }],
    button: s.borderbox,
    buttonLink: [s.box, { backgroundColor: link }],
    buttonAct: [s.box, { backgroundColor: act }],
}