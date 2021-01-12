(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "0M5u":
/*!***************************************************************************************************!*\
  !*** ./projects/e-commerce/src/app/product/components/product-filter/product-filter.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ProductFilterComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductFilterComponent_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductFilterComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const check_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", check_r6.val);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", check_r6.val);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", check_r6.val, " ");
} }
function ProductFilterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductFilterComponent_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r2 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.toggleAccordion(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductFilterComponent_div_0_span_5_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductFilterComponent_div_0_span_6_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductFilterComponent_div_0_div_9_Template, 5, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](values_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isMenuOpen[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isMenuOpen[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isMenuOpen[i_r2] ? "active" : "inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", values_r1.checkBox);
} }
class ProductFilterComponent {
    constructor() {
        this.isMenuOpen = [true];
        this.header = [
            {
                title: "Dry fruits",
                checkBox: [
                    {
                        val: "cashew"
                    },
                    {
                        val: "almonds"
                    },
                    {
                        val: "macadamia"
                    },
                    {
                        val: "pistachio"
                    },
                    {
                        val: "Walnuts"
                    }
                ]
            },
            {
                title: "Price",
                val: "subi"
            },
            {
                title: "Discount",
                checkBox: [
                    {
                        val: "10% off"
                    },
                    {
                        val: "20% off"
                    },
                    {
                        val: "30% off"
                    },
                    {
                        val: "40% off"
                    },
                    {
                        val: "50% off"
                    },
                    {
                        val: "60% off"
                    },
                    {
                        val: "70% off"
                    }
                ]
            },
            {
                title: "quantity",
                checkBox: [
                    {
                        val: "1kg"
                    },
                    {
                        val: "2 kg"
                    },
                    {
                        val: "3 kg"
                    },
                    {
                        val: "4 kg"
                    },
                    {
                        val: "5 kg"
                    }
                ]
            },
            {
                title: "offers",
                checkBox: [
                    {
                        val: "special price"
                    },
                    {
                        val: "manzoon offer"
                    }
                ]
            }
        ];
    }
    ngOnInit() {
    }
    toggleAccordion(index) {
        this.isMenuOpen[index] = !this.isMenuOpen[index];
    }
}
ProductFilterComponent.ɵfac = function ProductFilterComponent_Factory(t) { return new (t || ProductFilterComponent)(); };
ProductFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductFilterComponent, selectors: [["app-product-filter"]], decls: 1, vars: 1, consts: [["class", "marginClass", 4, "ngFor", "ngForOf"], [1, "marginClass"], [1, "h2-active-class", 3, "click"], [4, "ngIf"], [3, "ngClass"], [1, "div-class"], ["class", "d-flex div-margin-class", 4, "ngFor", "ngForOf"], [1, "mdi", "mdi-chevron-down"], [1, "mdi", "mdi-chevron-up"], [1, "d-flex", "div-margin-class"], ["type", "checkbox", 3, "id"], [3, "for"]], template: function ProductFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductFilterComponent_div_0_Template, 10, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.header);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".marginClass[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 transparent, 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 13px 10px;\n  font-size: 14px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  color: #113c55;\n  border: 0;\n  border-radius: 4px;\n  text-transform: uppercase;\n  font-weight: 700;\n  background: #fff;\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background: #f3f3f3;\n}\n\nbutton[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n  color: #113c55;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  height: 25px;\n  width: 25px;\n  background: #ef6c00;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.active[_ngcontent-%COMP%] {\n  display: block;\n  transition: all 0.5s ease;\n  padding: 0 13px;\n  border-top: 0;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.active[_ngcontent-%COMP%]   .h2-active-class[_ngcontent-%COMP%] {\n  border-bottom: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  display: none;\n  transition: all 0.5s ease;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #113c55;\n  position: relative;\n  text-transform: capitalize;\n  margin-bottom: 0px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.div-class[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n.div-margin-class[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 10px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n\nlabel[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  border: 2px solid #ddd;\n  margin-right: 15px;\n  border-radius: 3px;\n  transition: all 0.3s;\n}\n\ninput[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  border: 10px solid #ffc107;\n  background: #ffc107;\n  animation: bounce 250ms;\n}\n\ninput[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 6px;\n  left: 4px;\n  border-right: 3px solid transparent;\n  border-bottom: 3px solid transparent;\n  transform: rotate(45deg);\n  transform-origin: 0% 100%;\n  animation: checked-box 125ms 250ms forwards;\n}\n\n@keyframes checked-box {\n  0% {\n    width: 0;\n    height: 0;\n    border-color: #fff;\n    transform: translate(0, 0) rotate(45deg);\n  }\n  33% {\n    width: 6px;\n    height: 4px;\n    border-color: #fff;\n    transform: translate(0, 0) rotate(45deg);\n  }\n  100% {\n    width: 6px;\n    height: 12px;\n    border-color: #fff;\n    transform: translate(0, -8px) rotate(45deg);\n  }\n}\n\n@keyframes bounce {\n  0% {\n    transform: scale(1);\n  }\n  33% {\n    transform: scale(0.7);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LWZpbHRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQUE7RUFDQSxzR0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ1hXO0VEYVgsU0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQ25CUTtFRG9CUixXQUFBO0FBREo7O0FBRUk7RUFDSSxtQkNuQlE7QURtQmhCOztBQUVJO0VBRUEsZUFBQTtFQUNBLFNBQUE7RUFDQSxjQzFCVztFRDJCWCx5QkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0k7RUFDRyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQ3RDTTtFRHVDTixrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0MxQ0s7QUR5Q1o7O0FBRVE7RUFDSSxlQUFBO0FBQVo7O0FBS0M7RUFNRyxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUFSSjs7QUFISTtFQUNJLDJCQUFBO0VBQ0EsdUNBQUE7RUFDQSx3Q0FBQTtBQUtSOztBQU9DO0VBQ0csYUFBQTtFQUNBLHlCQUFBO0FBSko7O0FBT0M7RUFDRyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ3ZFVztFRHdFWCxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFKSjs7QUFNRTtFQUNJLGVBQUE7QUFITjs7QUFNTTtFQUNFLG1CQUFBO0FBSFI7O0FBTUU7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFISjs7QUFNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFISjs7QUFNRTtFQUNFLDBCQUFBO0VBQ0EsbUJDbEdVO0VEbUdWLHVCQUFBO0FBSEo7O0FBTUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7QUFISjs7QUFNRTtFQUNFO0lBQ0UsUUFBQTtJQUNBLFNBQUE7SUFDQSxrQkMvSE07SURnSU4sd0NBQUE7RUFISjtFQUtFO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxrQkNySU07SURzSU4sd0NBQUE7RUFISjtFQUtFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxrQkMzSU07SUQ0SU4sMkNBQUE7RUFISjtBQUNGOztBQU1FO0VBQ0U7SUFDRSxtQkFBQTtFQUpKO0VBTUU7SUFDRSxxQkFBQTtFQUpKO0VBTUU7SUFDRSxtQkFBQTtFQUpKO0FBQ0YiLCJmaWxlIjoicHJvZHVjdC1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG4ubWFyZ2luQ2xhc3Mge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IDAgcmdiYSgwLDAsMCwuMSksMCAxcHggMXB4IDAgdHJhbnNwYXJlbnQsMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkZGFya0JsdWVDb2xvcjtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXJDb2xvcjtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlQ29sb3I7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRsaWdodEdyYXlDb2xvcjtcclxuICAgIH1cclxuICAgIGgyIHtcclxuXHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogJGRhcmtCbHVlQ29sb3I7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4gICAgc3BhbiB7XHJcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICByaWdodDogMTBweDtcclxuICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgYmFja2dyb3VuZDogJG9yYW5nZUNvbG9yO1xyXG4gICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgIGNvbG9yOiAkd2hpdGVDb2xvcjtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIH1cclxuXHJcbiAuYWN0aXZlIHtcclxuICAgIC5oMi1hY3RpdmUtY2xhc3Mge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgIH07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICBwYWRkaW5nOiAwIDEzcHg7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyQ29sb3I7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxuXHJcbiB9XHJcblxyXG4gLmluYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAwLjVzIGVhc2U7XHJcbiB9XHJcblxyXG4gbGFiZWwge1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGNvbG9yOiAkZGFya0JsdWVDb2xvcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmRpdi1jbGFzcyB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbiAgLmRpdi1tYXJnaW4tY2xhc3Mge1xyXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG59XHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICBsYWJlbCA+IHNwYW4ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyQ29sb3I7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgbGFiZWwgPiBzcGFuIHtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCAkeWVsbG93Q29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeWVsbG93Q29sb3I7XHJcbiAgICBhbmltYXRpb246IGJvdW5jZSAyNTBtcztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsID4gc3Bhbjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XHJcbiAgICBhbmltYXRpb246IGNoZWNrZWQtYm94IDEyNW1zIDI1MG1zIGZvcndhcmRzO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGNoZWNrZWQtYm94IHtcclxuICAgIDAlIHtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkd2hpdGVDb2xvcjtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgfVxyXG4gICAgMzMlIHtcclxuICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHdoaXRlQ29sb3I7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB3aWR0aDogNnB4O1xyXG4gICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHdoaXRlQ29sb3I7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLThweCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBib3VuY2Uge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gICAgMzMlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9IiwiJG9yYW5nZUNvbG9yOiNlZjZjMDA7XHJcbiR3aGl0ZUNvbG9yOiNmZmY7XHJcbiRibGFja0NvbG9yOiMyMjI7XHJcbiRkYXJrQmx1ZUNvbG9yOiMxMTNjNTU7XHJcbiRsaWdodEdyYXlDb2xvcjojZjNmM2YzO1xyXG4kbWVkaXVtR3JheUNvbG9yOiM3Nzc7XHJcbiRsaWdodEJsYWNrOiAjMDAwMDAwMDU7XHJcbiRib3JkZXJDb2xvcjojZGRkO1xyXG4kbGlnaHRXaGl0ZUNvbG9yOiNkM2QzZDM7XHJcbiRidXR0b25Cb3hTaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiR5ZWxsb3dDb2xvcjogI2ZmYzEwNztcclxuJGRyb3BEb3duQm94U2hhZG93OjAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiRoclNvbGlkQ29sb3I6I2RhZTBlNTtcclxuJGNhcmRTaGFkb3c6IDJweCAycHggNnB4IDAgcmdiYSgwLDAsMCwuMSksMCAxcHggMXB4IDAgdHJhbnNwYXJlbnQsMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kdmVydGlCdXR0b25TaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpOyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-filter',
                templateUrl: './product-filter.component.html',
                styleUrls: ['./product-filter.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "NUz+":
/*!***********************************************************************************************************!*\
  !*** ./projects/e-commerce/src/app/product/components/product-large-grid/product-large-grid.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ProductLargeGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductLargeGridComponent", function() { return ProductLargeGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared-components/components/rating/rating.component */ "uO1g");




function ProductLargeGridComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "-70% off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-rating", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u20B9 1234 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u20B9100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/images/productImage/", product_r1.firstImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/images/productImage/", product_r1.secondImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r1.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentRate", ctx_r0.currentRate);
} }
class ProductLargeGridComponent {
    constructor() {
        this.currentRate = 3.6;
    }
    ngOnInit() {
    }
}
ProductLargeGridComponent.ɵfac = function ProductLargeGridComponent_Factory(t) { return new (t || ProductLargeGridComponent)(); };
ProductLargeGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductLargeGridComponent, selectors: [["app-product-large-grid"]], inputs: { products: "products" }, decls: 2, vars: 1, consts: [[1, "d-flex", "flex-wrap"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "product-grid"], [1, "product-image"], [1, "ribbon"], ["href", "javascript:void(0);", 1, "image"], [1, "pic-1", 3, "src"], [1, "pic-2", 3, "src"], [1, "social"], ["href", "javascript:void(0);"], [1, "mdi", "mdi-eye"], [1, "mdi", "mdi-heart-outline"], [1, "mdi", "mdi-cart"], [1, "product-content"], [1, "title", "mb-1"], ["href", "#"], [1, "price"], [3, "currentRate"], ["href", "javascript:void(0)", 1, "amountClass"]], template: function ProductLargeGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductLargeGridComponent_div_1_Template, 32, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_components_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_2__["RatingComponent"]], styles: [".product-grid[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #fff;\n  box-shadow: 0px 0px 0px #fff;\n  transition: 0.5s all;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 transparent, 0 1px 3px 0 rgba(0, 0, 0, 0.12) !important;\n  border-radius: unset !important;\n  border: unset !important;\n  flex-basis: 32.2%;\n  margin: 5px;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  transition: 0.5s all;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 240px;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 180px;\n  margin: auto;\n  display: block;\n  padding: 10px;\n}\n\n.product-image[_ngcontent-%COMP%]   .pic-2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  transition: 0.5s all;\n  opacity: 0;\n  margin-top: auto;\n  margin-bottom: auto !important;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   .pic-1[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: 0.5s all;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]   .pic-1[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]   .pic-2[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .product-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #ef6c00;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .tag[_ngcontent-%COMP%] {\n  background-color: #ef6c00;\n  color: #fff !important;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .tag[_ngcontent-%COMP%]::after {\n  border-left-color: #ef6c00;\n}\n\n.product-grid[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  position: absolute;\n  bottom: 10px;\n  right: 0px;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);\n  width: 50%;\n  height: 100%;\n  transform: skewX(-25deg);\n  position: absolute;\n  top: 0;\n  left: -75%;\n  z-index: 1;\n  transition: all 1s ease;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]:before {\n  left: 125%;\n}\n\n.product-grid[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #ef6c00;\n  font-size: 20px;\n  line-height: 40px;\n  width: 40px;\n  height: 40px;\n  display: block;\n  transition: 0.5s all;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.product-grid[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  transform: translateX(100px);\n  transition: 0.5s all;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.product-grid[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #222222;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%] {\n  border-top: 1px solid #ddd;\n  padding: 10px 10px;\n}\n\n.product-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: unset !important;\n}\n\n.product-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ef6c00 !important;\n  text-decoration: none;\n  letter-spacing: 1px;\n  transition: 0.5s all;\n  font-size: 18px;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n\n.product-grid[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: #ef6c00;\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.product-grid[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #222;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.amountClass[_ngcontent-%COMP%] {\n  color: #ef6c00;\n  font-size: 15px;\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.amountClass[_ngcontent-%COMP%]::first-letter {\n  color: #113c55 !important;\n}\n\n.amountClass[_ngcontent-%COMP%]   del[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 13px;\n}\n\n.ribbon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 34px;\n  top: 20px;\n  position: absolute;\n  display: block;\n  background: #ffc107;\n  color: #333;\n  font-family: arial;\n  font-size: 15px;\n  color: white;\n  text-align: center;\n  line-height: 34px;\n  transform: rotate(-42deg);\n  -webkit-transform: rotate(-42deg);\n  -ms-transform: rotate(-42deg);\n  z-index: 1;\n  left: -31px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LWxhcmdlLWdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUhBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBRUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUcsYUFBQTtBQUFIOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFHQTtFQUNRLFVBQUE7QUFBUjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFDSTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUFFUjs7QUFDTTtFQUNHLDBCQUFBO0FBQ1Q7O0FBS0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLCtGQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFHQTtFQUEyQyxVQUFBO0FBQzNDOztBQUNBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBRUo7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFJQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLDJCQUFBO0FBREo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBQUo7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUZKOztBQUdJO0VBQ0ksZUFBQTtFQUNKLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFHSTtFQUNJLHlCQUFBO0FBRFI7O0FBR0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQURSOztBQU1FO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSEoiLCJmaWxlIjoicHJvZHVjdC1sYXJnZS1ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtZ3JpZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG5cclxufVxyXG4uY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCAwIHJnYmEoMCwwLDAsLjEpLDAgMXB4IDFweCAwIHRyYW5zcGFyZW50LDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1iYXNpczogMzIuMiU7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLnByb2R1Y3QtZ3JpZCAucHJvZHVjdC1pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZCAucHJvZHVjdC1pbWFnZSAuaW1hZ2Uge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG59XHJcblxyXG4ucHJvZHVjdC1ncmlkIC5wcm9kdWN0LWltYWdlIGltZyB7XHJcbm1heC13aWR0aDogMTgwcHg7XHJcbm1hcmdpbjogYXV0bztcclxuZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5wcm9kdWN0LWltYWdlIC5waWMtMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG4gICAgb3BhY2l0eTogMCA7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbi5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtaW1hZ2UgLnBpYy0xIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAgIFxyXG5cclxufVxyXG5cclxuLnByb2R1Y3QtZ3JpZDpob3ZlciAucHJvZHVjdC1pbWFnZSAucGljLTEge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZDpob3ZlciAucHJvZHVjdC1pbWFnZSAucGljLTIge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4ucHJvZHVjdC1ncmlkOmhvdmVyIC5wcm9kdWN0LWNvbnRlbnQgLnRpdGxlIHtcclxuICBjb2xvcjogI2VmNmMwMDsgICAgXHJcbn1cclxuLnByb2R1Y3QtZ3JpZDpob3ZlciB7XHJcbiAgICAudGFne1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjZjMDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnRhZzo6YWZ0ZXIge1xyXG4gICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI2VmNmMwMDsgXHJcbiAgICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4ucHJvZHVjdC1ncmlkIC5zb2NpYWwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZCAucHJvZHVjdC1pbWFnZTpiZWZvcmV7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUscmdiYSgyNTUsMjU1LDI1NSwuMykgMTAwJSk7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMjVkZWcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogLTc1JTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxufVxyXG4ucHJvZHVjdC1ncmlkOmhvdmVyIC5wcm9kdWN0LWltYWdlOmJlZm9yZXsgbGVmdDogMTI1JTsgfVxyXG5cclxuLnByb2R1Y3QtZ3JpZCAuc29jaWFsIGxpIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWY2YzAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcblxyXG59XHJcblxyXG4ucHJvZHVjdC1ncmlkIC5zb2NpYWwgbGkge1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuXHJcbn1cclxuLnByb2R1Y3QtZ3JpZDpob3ZlciAuc29jaWFsIGxpIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuXHJcbn1cclxuLnByb2R1Y3QtZ3JpZCAuc29jaWFsIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xyXG5cclxuXHJcbn1cclxuXHJcbi5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtY29udGVudCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtY29udGVudCAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcbi5wcm9kdWN0LWNvbnRlbnQgLnRpdGxlIGEge1xyXG4gICAgY29sb3I6ICNlZjZjMDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIFxyXG5cclxufSBcclxuXHJcbi5wcm9kdWN0LWdyaWQgLnByaWNlIHtcclxuICAgIGNvbG9yOiAjZWY2YzAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgc3BhbntcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYW1vdW50Q2xhc3MgIHtcclxuICAgIGNvbG9yOiAjZWY2YzAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICY6OmZpcnN0LWxldHRlciB7XHJcbiAgICAgICAgY29sb3I6ICAjMTEzYzU1ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBkZWwge1xyXG4gICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiAgLnJpYmJvbiBzcGFuIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDojZmZjMTA3O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00MmRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00MmRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQyZGVnKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAtMzFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductLargeGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-large-grid',
                templateUrl: './product-large-grid.component.html',
                styleUrls: ['./product-large-grid.component.scss']
            }]
    }], function () { return []; }, { products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Qe0N":
/*!*********************************************************************************************************!*\
  !*** ./projects/e-commerce/src/app/product/components/product-list-view/product-list-view.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProductListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListViewComponent", function() { return ProductListViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared-components/components/rating/rating.component */ "uO1g");




function ProductListViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "-70% off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-rating", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u20B9 1234 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u20B9100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/productImage/", product_r1.firstImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/productImage/", product_r1.secondImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r1.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentRate", ctx_r0.currentRate);
} }
class ProductListViewComponent {
    constructor() {
        this.currentRate = 3.6;
    }
    ngOnInit() {
    }
}
ProductListViewComponent.ɵfac = function ProductListViewComponent_Factory(t) { return new (t || ProductListViewComponent)(); };
ProductListViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductListViewComponent, selectors: [["app-product-list-view"]], inputs: { products: "products" }, decls: 2, vars: 1, consts: [[1, "d-flex", "flex-wrap"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "product-grid", "d-flex"], [1, "product-image"], [1, "ribbon"], ["href", "javascript:void(0);", 1, "image"], [1, "pic-1", 3, "src"], [1, "pic-2", 3, "src"], [1, "social"], ["href", "javascript:void(0);"], [1, "mdi", "mdi-eye"], [1, "mdi", "mdi-heart-outline"], [1, "mdi", "mdi-cart"], [1, "product-content"], [1, "title", "mb-1"], ["href", "#"], [1, "price"], [3, "currentRate"], ["href", "javascript:void(0)", 1, "amountClass"]], template: function ProductListViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductListViewComponent_div_1_Template, 32, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_components_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_2__["RatingComponent"]], styles: [".product-grid[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #fff;\n  box-shadow: 0px 0px 0px #fff;\n  transition: 0.5s all;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 transparent, 0 1px 3px 0 rgba(0, 0, 0, 0.12) !important;\n  border-radius: unset !important;\n  border: unset !important;\n  flex-basis: 100%;\n  margin-bottom: 10px;\n}\n\n.card[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #f3f3f3 !important;\n}\n\n.card[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]:nth-child(even) {\n  background: #faebd7 !important;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  transition: 0.5s all;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 240px;\n  width: 60%;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 180px;\n  margin: auto;\n  display: block;\n  padding: 10px;\n}\n\n.product-image[_ngcontent-%COMP%]   .pic-2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  transition: 0.5s all;\n  opacity: 0;\n  margin-top: auto;\n  margin-bottom: auto !important;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   .pic-1[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: 0.5s all;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]   .pic-1[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]   .pic-2[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .product-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #ef6c00;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .tag[_ngcontent-%COMP%] {\n  background-color: #ef6c00;\n  color: #fff !important;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .tag[_ngcontent-%COMP%]::after {\n  border-left-color: #ef6c00;\n}\n\n.product-grid[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  position: absolute;\n  right: 0px;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);\n  width: 50%;\n  height: 100%;\n  transform: skewX(-25deg);\n  position: absolute;\n  top: 0;\n  left: -75%;\n  z-index: 1;\n  transition: all 1s ease;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]:before {\n  left: 125%;\n}\n\n.product-grid[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #ef6c00;\n  font-size: 20px;\n  line-height: 40px;\n  width: 40px;\n  height: 40px;\n  display: block;\n  transition: 0.5s all;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.product-grid[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  transform: translateX(100px);\n  transition: 0.5s all;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.product-grid[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #222222;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  width: 40%;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n\n.product-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: unset !important;\n}\n\n.product-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ef6c00 !important;\n  text-decoration: none;\n  letter-spacing: 1px;\n  transition: 0.5s all;\n  font-size: 18px;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n\n.product-grid[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: #ef6c00;\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.product-grid[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #222;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.amountClass[_ngcontent-%COMP%] {\n  color: #ef6c00;\n  font-size: 15px;\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.amountClass[_ngcontent-%COMP%]::first-letter {\n  color: #113c55 !important;\n}\n\n.amountClass[_ngcontent-%COMP%]   del[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 13px;\n}\n\n.ribbon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 34px;\n  top: 20px;\n  position: absolute;\n  display: block;\n  background: #ffc107;\n  color: #333;\n  font-family: arial;\n  font-size: 15px;\n  color: white;\n  text-align: center;\n  line-height: 34px;\n  transform: rotate(-42deg);\n  -webkit-transform: rotate(-42deg);\n  -ms-transform: rotate(-42deg);\n  z-index: 1;\n  left: -31px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LWxpc3Qtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpSEFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ007RUFDRSw4QkFBQTtBQUNSOztBQUNNO0VBQ0UsOEJBQUE7QUFDUjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBREY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBS0E7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUMsYUFBQTtBQUhEOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBRkY7O0FBSUE7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7QUFERjs7QUFNQTtFQUNNLFVBQUE7QUFITjs7QUFLQTtFQUNFLFVBQUE7QUFGRjs7QUFJQTtFQUNBLGNBQUE7QUFEQTs7QUFJRTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUFETjs7QUFJSTtFQUNHLDBCQUFBO0FBRlA7O0FBUUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBTEY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsK0ZBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQUpGOztBQU1BO0VBQTJDLFVBQUE7QUFGM0M7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUFERjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQUZGOztBQUtBO0VBQ0Usd0JBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUZGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FBSko7O0FBT0E7RUFDRSwyQkFBQTtBQUpGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQUhGOztBQVFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFMRjs7QUFNRTtFQUNJLGVBQUE7RUFDSixXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUpGOztBQVFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBTEY7O0FBTUU7RUFDSSx5QkFBQTtBQUpOOztBQU1FO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFKTjs7QUFTQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQU5GIiwiZmlsZSI6InByb2R1Y3QtbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtZ3JpZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggI2ZmZjtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuXHJcbn1cclxuLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNnB4IDAgcmdiYSgwLDAsMCwuMSksMCAxcHggMXB4IDAgdHJhbnNwYXJlbnQsMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogdW5zZXQgIWltcG9ydGFudDtcclxuICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgLnByb2R1Y3QtZ3JpZCAucHJvZHVjdC1jb250ZW50IHtcclxuICAgICAgJjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMyAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFlYmQ3ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtaW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMjQwcHg7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG4ucHJvZHVjdC1ncmlkIC5wcm9kdWN0LWltYWdlIC5pbWFnZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG59XHJcblxyXG5cclxuLnByb2R1Y3QtZ3JpZCAucHJvZHVjdC1pbWFnZSBpbWcge1xyXG5tYXgtd2lkdGg6IDE4MHB4O1xyXG5tYXJnaW46IGF1dG87XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5cclxuIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnByb2R1Y3QtaW1hZ2UgLnBpYy0yIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICBvcGFjaXR5OiAwIDtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4ucHJvZHVjdC1ncmlkIC5wcm9kdWN0LWltYWdlIC5waWMtMSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICBcclxuXHJcbn1cclxuXHJcbi5wcm9kdWN0LWdyaWQ6aG92ZXIgLnByb2R1Y3QtaW1hZ2UgLnBpYy0xIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxufVxyXG4ucHJvZHVjdC1ncmlkOmhvdmVyIC5wcm9kdWN0LWltYWdlIC5waWMtMiB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4ucHJvZHVjdC1ncmlkOmhvdmVyIC5wcm9kdWN0LWNvbnRlbnQgLnRpdGxlIHtcclxuY29sb3I6ICNlZjZjMDA7ICAgIFxyXG59XHJcbi5wcm9kdWN0LWdyaWQ6aG92ZXIge1xyXG4gIC50YWd7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjZjMDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50YWc6OmFmdGVyIHtcclxuICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZWY2YzAwOyBcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4ucHJvZHVjdC1ncmlkIC5zb2NpYWwge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDBweDtcclxufVxyXG4ucHJvZHVjdC1ncmlkIC5wcm9kdWN0LWltYWdlOmJlZm9yZXtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDI1NSwyNTUsMjU1LDApIDAlLHJnYmEoMjU1LDI1NSwyNTUsLjMpIDEwMCUpO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogc2tld1goLTI1ZGVnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC03NSU7XHJcbiAgei1pbmRleDogMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxufVxyXG4ucHJvZHVjdC1ncmlkOmhvdmVyIC5wcm9kdWN0LWltYWdlOmJlZm9yZXsgbGVmdDogMTI1JTsgfVxyXG5cclxuLnByb2R1Y3QtZ3JpZCAuc29jaWFsIGxpIGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICNlZjZjMDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG5cclxufVxyXG5cclxuLnByb2R1Y3QtZ3JpZCAuc29jaWFsIGxpIHtcclxuICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcblxyXG59XHJcbi5wcm9kdWN0LWdyaWQ6aG92ZXIgLnNvY2lhbCBsaSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG5cclxufVxyXG4ucHJvZHVjdC1ncmlkIC5zb2NpYWwgbGkgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogIzIyMjIyMjtcclxuXHJcblxyXG59XHJcblxyXG4ucHJvZHVjdC1ncmlkIC5wcm9kdWN0LWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICB3aWR0aDogNDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtY29udGVudCAudGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogdW5zZXQgIWltcG9ydGFudDtcclxufVxyXG4ucHJvZHVjdC1jb250ZW50IC50aXRsZSBhIHtcclxuICBjb2xvcjogI2VmNmMwMCAhaW1wb3J0YW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIFxyXG5cclxufSBcclxuXHJcbi5wcm9kdWN0LWdyaWQgLnByaWNlIHtcclxuICBjb2xvcjogI2VmNmMwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBzcGFue1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFtb3VudENsYXNzICB7XHJcbiAgY29sb3I6ICNlZjZjMDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICY6OmZpcnN0LWxldHRlciB7XHJcbiAgICAgIGNvbG9yOiAgIzExM2M1NSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBkZWwge1xyXG4gICAgICBjb2xvcjogIzc3NztcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5yaWJib24gc3BhbiB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxuICB0b3A6IDIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6I2ZmYzEwNztcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQyZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00MmRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00MmRlZyk7XHJcbiAgei1pbmRleDogMTtcclxuICBsZWZ0OiAtMzFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-list-view',
                templateUrl: './product-list-view.component.html',
                styleUrls: ['./product-list-view.component.scss']
            }]
    }], function () { return []; }, { products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "WFN8":
/*!***********************************************************************************************************!*\
  !*** ./projects/e-commerce/src/app/product/components/product-small-grid/product-small-grid.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ProductSmallGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSmallGridComponent", function() { return ProductSmallGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared-components/components/rating/rating.component */ "uO1g");




function ProductSmallGridComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "-70% off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-rating", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u20B9 1234 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u20B9100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/productImage/", product_r1.firstImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/productImage/", product_r1.secondImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r1.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentRate", ctx_r0.currentRate);
} }
class ProductSmallGridComponent {
    constructor() {
        this.currentRate = 3.6;
    }
    ngOnInit() {
    }
}
ProductSmallGridComponent.ɵfac = function ProductSmallGridComponent_Factory(t) { return new (t || ProductSmallGridComponent)(); };
ProductSmallGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductSmallGridComponent, selectors: [["app-product-small-grid"]], inputs: { products: "products" }, decls: 2, vars: 1, consts: [[1, "d-flex", "flex-wrap"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "product-grid"], [1, "product-image"], [1, "ribbon"], ["href", "javascript:void(0);", 1, "image"], [1, "pic-1", 3, "src"], [1, "pic-2", 3, "src"], [1, "social"], ["href", "javascript:void(0);"], [1, "mdi", "mdi-eye"], [1, "mdi", "mdi-heart-outline"], [1, "mdi", "mdi-cart"], [1, "product-content"], [1, "title", "mb-1"], ["href", "#"], [1, "price"], [3, "currentRate"], ["href", "javascript:void(0)", 1, "amountClass"]], template: function ProductSmallGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductSmallGridComponent_div_1_Template, 32, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_components_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_2__["RatingComponent"]], styles: [".product-grid[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #fff;\n  box-shadow: 0px 0px 0px #fff;\n  transition: 0.5s all;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 transparent, 0 1px 3px 0 rgba(0, 0, 0, 0.12) !important;\n  border-radius: unset !important;\n  border: unset !important;\n  flex-basis: 23.9%;\n  margin: 5px;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  transition: 0.5s all;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 240px;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 180px;\n  margin: auto;\n  display: block;\n  padding: 10px;\n}\n\n.product-image[_ngcontent-%COMP%]   .pic-2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  transition: 0.5s all;\n  opacity: 0;\n  margin-top: auto;\n  margin-bottom: auto !important;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   .pic-1[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: 0.5s all;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]   .pic-1[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]   .pic-2[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .product-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #ef6c00;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .tag[_ngcontent-%COMP%] {\n  background-color: #ef6c00;\n  color: #fff !important;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .tag[_ngcontent-%COMP%]::after {\n  border-left-color: #ef6c00;\n}\n\n.product-grid[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  position: absolute;\n  bottom: 10px;\n  right: 0px;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);\n  width: 50%;\n  height: 100%;\n  transform: skewX(-25deg);\n  position: absolute;\n  top: 0;\n  left: -75%;\n  z-index: 1;\n  transition: all 1s ease;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]:before {\n  left: 125%;\n}\n\n.product-grid[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #ef6c00;\n  font-size: 20px;\n  line-height: 40px;\n  width: 40px;\n  height: 40px;\n  display: block;\n  transition: 0.5s all;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.product-grid[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  transform: translateX(100px);\n  transition: 0.5s all;\n}\n\n.product-grid[_ngcontent-%COMP%]:hover   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.product-grid[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #222222;\n}\n\n.product-grid[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%] {\n  border-top: 1px solid #ddd;\n  padding: 10px 10px;\n}\n\n.product-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: unset !important;\n}\n\n.product-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ef6c00 !important;\n  text-decoration: none;\n  letter-spacing: 1px;\n  transition: 0.5s all;\n  font-size: 18px;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n\n.product-grid[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: #ef6c00;\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.product-grid[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #222;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.amountClass[_ngcontent-%COMP%] {\n  color: #ef6c00;\n  font-size: 15px;\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.amountClass[_ngcontent-%COMP%]::first-letter {\n  color: #113c55 !important;\n}\n\n.amountClass[_ngcontent-%COMP%]   del[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 13px;\n}\n\n.ribbon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 34px;\n  top: 20px;\n  position: absolute;\n  display: block;\n  background: #ffc107;\n  color: #333;\n  font-family: arial;\n  font-size: 15px;\n  color: white;\n  text-align: center;\n  line-height: 34px;\n  transform: rotate(-42deg);\n  -webkit-transform: rotate(-42deg);\n  -ms-transform: rotate(-42deg);\n  z-index: 1;\n  left: -31px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LXNtYWxsLWdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUhBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBRUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUcsYUFBQTtBQUFIOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFHQTtFQUNRLFVBQUE7QUFBUjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFDSTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUFFUjs7QUFDTTtFQUNHLDBCQUFBO0FBQ1Q7O0FBS0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLCtGQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFHQTtFQUEyQyxVQUFBO0FBQzNDOztBQUNBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBRUo7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFJQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLDJCQUFBO0FBREo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBQUo7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUZKOztBQUdJO0VBQ0ksZUFBQTtFQUNKLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFHSTtFQUNJLHlCQUFBO0FBRFI7O0FBR0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQURSOztBQU1FO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSEoiLCJmaWxlIjoicHJvZHVjdC1zbWFsbC1ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtZ3JpZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG5cclxufVxyXG4uY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCAwIHJnYmEoMCwwLDAsLjEpLDAgMXB4IDFweCAwIHRyYW5zcGFyZW50LDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1iYXNpczogMjMuOSU7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLnByb2R1Y3QtZ3JpZCAucHJvZHVjdC1pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZCAucHJvZHVjdC1pbWFnZSAuaW1hZ2Uge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG59XHJcblxyXG4ucHJvZHVjdC1ncmlkIC5wcm9kdWN0LWltYWdlIGltZyB7XHJcbm1heC13aWR0aDogMTgwcHg7XHJcbm1hcmdpbjogYXV0bztcclxuZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5wcm9kdWN0LWltYWdlIC5waWMtMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG4gICAgb3BhY2l0eTogMCA7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbi5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtaW1hZ2UgLnBpYy0xIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAgIFxyXG5cclxufVxyXG5cclxuLnByb2R1Y3QtZ3JpZDpob3ZlciAucHJvZHVjdC1pbWFnZSAucGljLTEge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZDpob3ZlciAucHJvZHVjdC1pbWFnZSAucGljLTIge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4ucHJvZHVjdC1ncmlkOmhvdmVyIC5wcm9kdWN0LWNvbnRlbnQgLnRpdGxlIHtcclxuICBjb2xvcjogI2VmNmMwMDsgICAgXHJcbn1cclxuLnByb2R1Y3QtZ3JpZDpob3ZlciB7XHJcbiAgICAudGFne1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjZjMDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnRhZzo6YWZ0ZXIge1xyXG4gICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI2VmNmMwMDsgXHJcbiAgICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4ucHJvZHVjdC1ncmlkIC5zb2NpYWwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZCAucHJvZHVjdC1pbWFnZTpiZWZvcmV7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUscmdiYSgyNTUsMjU1LDI1NSwuMykgMTAwJSk7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMjVkZWcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogLTc1JTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxufVxyXG4ucHJvZHVjdC1ncmlkOmhvdmVyIC5wcm9kdWN0LWltYWdlOmJlZm9yZXsgbGVmdDogMTI1JTsgfVxyXG5cclxuLnByb2R1Y3QtZ3JpZCAuc29jaWFsIGxpIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWY2YzAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcblxyXG59XHJcblxyXG4ucHJvZHVjdC1ncmlkIC5zb2NpYWwgbGkge1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuXHJcbn1cclxuLnByb2R1Y3QtZ3JpZDpob3ZlciAuc29jaWFsIGxpIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuXHJcbn1cclxuLnByb2R1Y3QtZ3JpZCAuc29jaWFsIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xyXG5cclxuXHJcbn1cclxuXHJcbi5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtY29udGVudCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtY29udGVudCAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcbi5wcm9kdWN0LWNvbnRlbnQgLnRpdGxlIGEge1xyXG4gICAgY29sb3I6ICNlZjZjMDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIFxyXG5cclxufSBcclxuXHJcbi5wcm9kdWN0LWdyaWQgLnByaWNlIHtcclxuICAgIGNvbG9yOiAjZWY2YzAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgc3BhbntcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYW1vdW50Q2xhc3MgIHtcclxuICAgIGNvbG9yOiAjZWY2YzAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICY6OmZpcnN0LWxldHRlciB7XHJcbiAgICAgICAgY29sb3I6ICAjMTEzYzU1ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBkZWwge1xyXG4gICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiAgLnJpYmJvbiBzcGFuIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDojZmZjMTA3O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00MmRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00MmRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQyZGVnKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAtMzFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductSmallGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-small-grid',
                templateUrl: './product-small-grid.component.html',
                styleUrls: ['./product-small-grid.component.scss']
            }]
    }], function () { return []; }, { products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "YN2E":
/*!*********************************************************************************************************!*\
  !*** ./projects/e-commerce/src/app/product/components/product-container/product-container.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProductContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductContainerComponent", function() { return ProductContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-filter/product-filter.component */ "0M5u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_small_grid_product_small_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-small-grid/product-small-grid.component */ "WFN8");
/* harmony import */ var _product_large_grid_product_large_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-large-grid/product-large-grid.component */ "NUz+");
/* harmony import */ var _product_list_view_product_list_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-list-view/product-list-view.component */ "Qe0N");







function ProductContainerComponent_app_product_small_grid_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-small-grid", 16);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("products", ctx_r0.products);
} }
function ProductContainerComponent_app_product_large_grid_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-large-grid", 16);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("products", ctx_r1.products);
} }
function ProductContainerComponent_app_product_list_view_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-list-view", 16);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("products", ctx_r2.products);
} }
const _c0 = function (a0) { return { "button-bg-color": a0 }; };
class ProductContainerComponent {
    constructor() {
        this.viewType = 'grid';
        this.products = [
            {
                productName: 'Almond',
                firstImage: "newAlmond1.jpeg",
                secondImage: "newAlmond2.jpeg"
            },
            {
                productName: 'Peanut',
                firstImage: "peanut.jpeg",
                secondImage: "peanut2.jpeg"
            },
            {
                productName: 'Cashew',
                firstImage: "cashew1.jpeg",
                secondImage: "cashew2.jpeg"
            },
            {
                productName: 'dry fruits',
                firstImage: "dryfruits1.jpeg",
                secondImage: "dryFruits2.jpeg"
            },
            {
                productName: 'Almond',
                firstImage: "newAlmon1.jpeg",
                secondImage: "newAlmon2.jpeg"
            },
            {
                productName: 'Almond',
                firstImage: "almond2.jpeg",
                secondImage: "almond1.jpeg"
            },
        ];
    }
    ngOnInit() {
    }
    changeViewType(viewType) {
        this.viewType = viewType;
    }
}
ProductContainerComponent.ɵfac = function ProductContainerComponent_Factory(t) { return new (t || ProductContainerComponent)(); };
ProductContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductContainerComponent, selectors: [["app-product-container"]], decls: 33, vars: 12, consts: [[1, "container", "d-flex", "my-4"], [2, "flex-basis", "25%", "padding-right", "10px"], [2, "flex-basis", "75%", "padding-left", "10px"], [1, "card", 2, "box-shadow", "2px 2px 6px 0 rgba(0,0,0,.1),0 1px 1px 0 transparent,0 1px 3px 0 rgba(0,0,0,.12)", "padding", "10px", "margin-bottom", "10px"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], [2, "font-weight", "600", "margin-right", "10px"], [2, "width", "200px", "padding", "7px 0", "border", "0", "border-bottom", "1px solid #ddd"], [1, "list-unstyled", "mb-0", "d-flex"], [3, "ngClass", "click"], [1, "mdi", "mdi-view-module"], [1, "mx-2"], [1, "mdi", "mdi-view-comfy"], [1, "mdi", "mdi-view-list"], [1, "card", 2, "box-shadow", "2px 2px 6px 0 rgba(0,0,0,.1),0 1px 1px 0 transparent,0 1px 3px 0 rgba(0,0,0,.12)", "padding", "10px", "margin-top", "10px"], [3, "products", 4, "ngIf"], [3, "products"]], template: function ProductContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-product-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sort By : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Choose One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Price low to high");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "price high to low");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "latest products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductContainerComponent_Template_button_click_21_listener() { return ctx.changeViewType("grid"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductContainerComponent_Template_button_click_24_listener() { return ctx.changeViewType("largeGrid"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductContainerComponent_Template_button_click_27_listener() { return ctx.changeViewType("list"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProductContainerComponent_app_product_small_grid_30_Template, 1, 1, "app-product-small-grid", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProductContainerComponent_app_product_large_grid_31_Template, 1, 1, "app-product-large-grid", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProductContainerComponent_app_product_list_view_32_Template, 1, 1, "app-product-list-view", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.viewType == "grid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.viewType == "largeGrid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.viewType == "list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewType == "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewType == "largeGrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewType == "list");
    } }, directives: [_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_1__["ProductFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _product_small_grid_product_small_grid_component__WEBPACK_IMPORTED_MODULE_3__["ProductSmallGridComponent"], _product_large_grid_product_large_grid_component__WEBPACK_IMPORTED_MODULE_4__["ProductLargeGridComponent"], _product_list_view_product_list_view_component__WEBPACK_IMPORTED_MODULE_5__["ProductListViewComponent"]], styles: ["button[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  font-size: 25px;\n  color: #113c55;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  color: #ef6c00;\n}\nbutton[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.button-bg-color[_ngcontent-%COMP%] {\n  color: #ef6c00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNDRlc7QURFZjtBQUNJO0VBQ0ksY0NQSztBRFFiO0FBQ0k7RUFDSSxzQkFBQTtBQUNSO0FBRUE7RUFDSSxjQ2RTO0FEZWIiLCJmaWxlIjoicHJvZHVjdC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xyXG5idXR0b24ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAkZGFya0JsdWVDb2xvcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkb3JhbmdlQ29sb3I7XHJcbiAgICB9XHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIH1cclxufVxyXG4uYnV0dG9uLWJnLWNvbG9ye1xyXG4gICAgY29sb3I6ICRvcmFuZ2VDb2xvcjtcclxufSIsIiRvcmFuZ2VDb2xvcjojZWY2YzAwO1xyXG4kd2hpdGVDb2xvcjojZmZmO1xyXG4kYmxhY2tDb2xvcjojMjIyO1xyXG4kZGFya0JsdWVDb2xvcjojMTEzYzU1O1xyXG4kbGlnaHRHcmF5Q29sb3I6I2YzZjNmMztcclxuJG1lZGl1bUdyYXlDb2xvcjojNzc3O1xyXG4kbGlnaHRCbGFjazogIzAwMDAwMDA1O1xyXG4kYm9yZGVyQ29sb3I6I2RkZDtcclxuJGxpZ2h0V2hpdGVDb2xvcjojZDNkM2QzO1xyXG4kYnV0dG9uQm94U2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4keWVsbG93Q29sb3I6ICNmZmMxMDc7XHJcbiRkcm9wRG93bkJveFNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kaHJTb2xpZENvbG9yOiNkYWUwZTU7XHJcbiRjYXJkU2hhZG93OiAycHggMnB4IDZweCAwIHJnYmEoMCwwLDAsLjEpLDAgMXB4IDFweCAwIHRyYW5zcGFyZW50LDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHZlcnRpQnV0dG9uU2hhZG93OjAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-container',
                templateUrl: './product-container.component.html',
                styleUrls: ['./product-container.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dm6e":
/*!***********************************************************************!*\
  !*** ./projects/e-commerce/src/app/product/product-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_product_container_product_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product-container/product-container.component */ "YN2E");





const routes = [
    {
        path: 'view',
        component: _components_product_container_product_container_component__WEBPACK_IMPORTED_MODULE_2__["ProductContainerComponent"],
    },
];
class ProductRoutingModule {
}
ProductRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductRoutingModule });
ProductRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductRoutingModule_Factory(t) { return new (t || ProductRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "qTO8":
/*!***************************************************************!*\
  !*** ./projects/e-commerce/src/app/product/product.module.ts ***!
  \***************************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-routing.module */ "dm6e");
/* harmony import */ var _components_product_container_product_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product-container/product-container.component */ "YN2E");
/* harmony import */ var _components_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product-filter/product-filter.component */ "0M5u");
/* harmony import */ var _components_product_list_view_product_list_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product-list-view/product-list-view.component */ "Qe0N");
/* harmony import */ var _components_product_small_grid_product_small_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product-small-grid/product-small-grid.component */ "WFN8");
/* harmony import */ var _components_product_large_grid_product_large_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product-large-grid/product-large-grid.component */ "NUz+");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared-components/shared-components.module */ "xbDj");










class ProductModule {
}
ProductModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductModule });
ProductModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductModule_Factory(t) { return new (t || ProductModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductRoutingModule"],
            _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductModule, { declarations: [_components_product_container_product_container_component__WEBPACK_IMPORTED_MODULE_3__["ProductContainerComponent"], _components_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_4__["ProductFilterComponent"], _components_product_list_view_product_list_view_component__WEBPACK_IMPORTED_MODULE_5__["ProductListViewComponent"], _components_product_small_grid_product_small_grid_component__WEBPACK_IMPORTED_MODULE_6__["ProductSmallGridComponent"], _components_product_large_grid_product_large_grid_component__WEBPACK_IMPORTED_MODULE_7__["ProductLargeGridComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _product_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductRoutingModule"],
        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_product_container_product_container_component__WEBPACK_IMPORTED_MODULE_3__["ProductContainerComponent"], _components_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_4__["ProductFilterComponent"], _components_product_list_view_product_list_view_component__WEBPACK_IMPORTED_MODULE_5__["ProductListViewComponent"], _components_product_small_grid_product_small_grid_component__WEBPACK_IMPORTED_MODULE_6__["ProductSmallGridComponent"], _components_product_large_grid_product_large_grid_component__WEBPACK_IMPORTED_MODULE_7__["ProductLargeGridComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _product_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductRoutingModule"],
                    _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=product-product-module.js.map