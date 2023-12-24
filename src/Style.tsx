import { Dimensions, StyleSheet } from "react-native";
import { useSettings } from "./store";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";

// --- 将来考虑响应式
export const Sizes = {
    cm: 16, // 标准尺度，常用字体大小
    scm: 8, // 较小尺度，padding, margin边距调整
    bcm: 32, // 较大尺度，标题字体大小
    mcm: 4, // min 最小尺度，小按钮边距等
    xcm: 64 // max 最大尺度
}

const { cm, bcm, scm, mcm, xcm } = Sizes

export function useStyle() {

    const { isDark } = useSettings()

    // 将来Themed，至少分dark, light, perfer dark as default
    const Colors =
        isDark ? {
            bg: '#222222', // 底色
            mid: '#444444', // 中间背景色
            front: '#FEFEFE', // 前景色，primary
            sub: '#CDCDCD', // 副前景色
            link: 'deepskyblue', // 连接色，用于外部资源，或则场景跳转
            act: 'coral', // interactive互动，用于本场景的互动
            warn: 'tomato', // 警告色
            emphasis: 'lightseagreen' // 强调色，祝贺

        } : {
            bg: 'white', // 底色
            mid: 'whitesmoke', // 中间背景色
            front: 'dimgray', // 前景色，primary
            sub: 'darkgrey', // 副前景色
            link: 'lightskyblue', // 连接色，用于外部资源，或则场景跳转
            act: 'lightsalmon', // interactive互动，用于本场景的互动
            warn: 'tomato', // 警告色
            emphasis: 'lightseagreen' // 强调色，祝贺
        }

    const { front, bg, mid, sub, link, warn, act, emphasis } = Colors

    // react navigation colors
    const NavColors = {
        primary: front,
        background: bg,
        card: bg,
        text: sub,
        border: mid,
        notification: warn
    }

    // styles ---- basic elements
    const s = StyleSheet.create({
        container: { flex: 1, backgroundColor: bg },
        row: { flexDirection: 'row', gap: cm },
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
    const sc = {
        card: [s.radius, s.padding, s.margin, { backgroundColor: mid }],
        button: s.borderbox,
        buttonLink: [s.box, { backgroundColor: link }],
        buttonAct: [s.box, { backgroundColor: act }],
    }

    return ({ s, sc, Colors, NavColors, isDark })
}
