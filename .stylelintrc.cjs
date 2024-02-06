module.exports = {
    "extends": ["stylelint-config-standard"],
    "plugins": ["stylelint-order"],
    "customSyntax": "postcss-styled-syntax",
    "rules": {
        "declaration-empty-line-before": [
            "always",
            {
                "ignore": ["after-comment", "after-declaration", "inside-single-line-block"]
            }
        ], // 중간 공백 추가
        "shorthand-property-no-redundant-values": true, // ex) margin: 1px 1px 1px 1px -> margin 1px 축약
        
        "order/order": ["custom-properties", "declarations"], // 코드 스타일의 순서 검사
        "order/properties-order": [
            {
                "groupName": "Layout",
                "noEmptyLineBetween": true,
                "properties": [
                    "position",
                    "top",
                    "right",
                    "bottom",
                    "left",
                    "display",
                    "visibility",
                    "overflow",
                    "float",
                    "clear",
                    "z-index",
                    "flex-direction",
                    "flex-wrap",
                    "float",
                    "grid",
                    "grid-template-columns",
                    "grid-area",
                    "grid-template-rows",
                    "grid-column",
                    "grid-template-areas",
                    "grid-auto-flow",
                    "grid-row",
                    "grid-auto-rows",
                    "justify-content",
                    "align-items"
                ]
            },
            {
                "groupName": "Box",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": [
                    "width",
                    "height",
                    "margin",
                    "margin-top",
                    "margin-right",
                    "margin-bottom",
                    "margin-left",
                    "padding",
                    "padding-top",
                    "padding-right",
                    "padding-bottom",
                    "padding-left",
                    "border",
                    "border-radius",
                    "border-color",
                    "border-width",
                    "border-style",
                    "border-bottom",
                    "border-top",
                    "border-left",
                    "border-right"
                ]
            },
            {
                "groupName": "Background",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": [
                    "background",
                    "background-color",
                    "background-image",
                    "opacity",
                    "overflow",
                    "text-overflow",
                    "outline"
                ]
            },
            {
                "groupName": "Font",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": [
                    "color",
                    "font-size",
                    "font-family",
                    "font-style",
                    "font-weight",
                    "line-height",
                    "letter-spacing",
                    "text-align",
                    "text-indent",
                    "vertical-align",
                    "white-space",
                    "text-decoration",
                    "text-transform",
                    "text-shadow",
                    "text-overflow"
                ]
            },
            {
                "groupName": "Animation",
                "emptyLineBefore": "always",
                "noEmptyLineBetween": true,
                "properties": [
                    "translate",
                    "animation",
                    "transition",
                    "transition-property",
                    "transition-duration",
                    "transition-delay",
                    "transition-timing-function"
                ]
            }
        ] // style 순서
    }
}
