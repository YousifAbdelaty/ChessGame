
// this file to dynamicly update the board info after every move by removeing the class so  i can add them in new squares

export default function removedots() {
    document.querySelectorAll(".dot").forEach(dot => {
        console.log('removeddots')
        dot.remove()
    })
    document.querySelectorAll(".anime").forEach(target => {
        target.remove()
        console.log('removeanimes')
    })
}

export function removeDangerPlacesForUpdate() {
    console.log("hello world")
    document.querySelectorAll(".protected_fromwhite").forEach(danger => {
        danger.classList.remove("protected_fromwhite")
    })
    document.querySelectorAll(".protected_fromblack").forEach(danger => {
        danger.classList.remove("protected_fromblack")
    })
    document.querySelectorAll(".danger").forEach(danger => {
        danger.classList.remove("danger")
    })
    document.querySelectorAll(".pin").forEach(danger => {
        danger.classList.remove("pin")
    })
    document.querySelectorAll(".whomadepin").forEach(danger => {
        danger.classList.remove("whomadepin")
    })
    document.querySelectorAll(".available").forEach(danger => {
        danger.classList.remove("available")
    })
    document.querySelectorAll(".inpin").forEach(danger => {
        danger.classList.remove("inpin")
    })

}