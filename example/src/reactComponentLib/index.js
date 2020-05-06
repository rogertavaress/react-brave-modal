/* eslint-disable */
import React, { createContext, useState, useCallback, useContext } from 'react';
import { FiX } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var appearContentArea = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    top: -100vh;\n  }\n  to {\n    top: 0px;\n  }\n  leaves {\n    top: 100vh;\n  }\n"], ["\n  from {\n    top: -100vh;\n  }\n  to {\n    top: 0px;\n  }\n  leaves {\n    top: 100vh;\n  }\n"])));
var Content = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: #000;\n\n  h2 {\n    padding: 20px 20px 0;\n  }\n\n  p {\n    padding: 15px 20px 20px;\n  }\n"], ["\n  color: #000;\n\n  h2 {\n    padding: 20px 20px 0;\n  }\n\n  p {\n    padding: 15px 20px 20px;\n  }\n"])));
var ContentArea = styled(animated.div)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  background: white;\n  width: 500px;\n  max-height: 80vh;\n  border-radius: 5px;\n  box-sizing: border-box;\n  animation: ", " 1s;\n  overflow: auto;\n\n  & > button {\n    display: flex;\n    position: absolute;\n    top: 10px;\n    right: 5px;\n    border: 0;\n    background: transparent;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n\n    svg {\n      color: rgba(0, 0, 0, 0.7);\n    }\n  }\n"], ["\n  position: relative;\n  background: white;\n  width: 500px;\n  max-height: 80vh;\n  border-radius: 5px;\n  box-sizing: border-box;\n  animation: ", " 1s;\n  overflow: auto;\n\n  & > button {\n    display: flex;\n    position: absolute;\n    top: 10px;\n    right: 5px;\n    border: 0;\n    background: transparent;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n\n    svg {\n      color: rgba(0, 0, 0, 0.7);\n    }\n  }\n"])), appearContentArea);
var templateObject_1, templateObject_2, templateObject_3;

var SimpleModal = function (_a) {
    var children = _a.children, title = _a.title, text = _a.text;
    var closeModal = useModal().closeModal;
    return (React.createElement(ContentArea, null,
        React.createElement("button", { type: "button", onClick: function () { return closeModal(); } },
            React.createElement(FiX, { size: 15 })),
        React.createElement(Content, null,
            title && React.createElement("h2", null, title),
            text && React.createElement("p", null, text),
            children)));
};

var appearContentArea$1 = keyframes(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  from {\n    top: -100vh;\n  }\n  to {\n    top: 0px;\n  }\n  leaves {\n    top: 100vh;\n  }\n"], ["\n  from {\n    top: -100vh;\n  }\n  to {\n    top: 0px;\n  }\n  leaves {\n    top: 100vh;\n  }\n"])));
var templateObject_1$1;

var Content$1 = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  padding: 30px;\n  color: #000;\n  @media (max-width: 250px) {\n    padding: 30px 15px;\n  }\n\n  h2 {\n  }\n\n  p {\n    margin: 15px 0;\n  }\n"], ["\n  padding: 30px;\n  color: #000;\n  @media (max-width: 250px) {\n    padding: 30px 15px;\n  }\n\n  h2 {\n  }\n\n  p {\n    margin: 15px 0;\n  }\n"])));
var ContentArea$1 = styled(animated.div)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  position: relative;\n  background: white;\n  width: 100vw;\n  height: 100vh;\n  border-radius: 5px;\n  box-sizing: border-box;\n  animation: ", " 1s;\n  overflow: auto;\n\n  & > button {\n    display: flex;\n    position: absolute;\n    top: 10px;\n    right: 5px;\n    border: 0;\n    background: transparent;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n\n    svg {\n      color: rgba(0, 0, 0, 0.7);\n    }\n  }\n"], ["\n  position: relative;\n  background: white;\n  width: 100vw;\n  height: 100vh;\n  border-radius: 5px;\n  box-sizing: border-box;\n  animation: ", " 1s;\n  overflow: auto;\n\n  & > button {\n    display: flex;\n    position: absolute;\n    top: 10px;\n    right: 5px;\n    border: 0;\n    background: transparent;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n\n    svg {\n      color: rgba(0, 0, 0, 0.7);\n    }\n  }\n"])), appearContentArea$1);
var templateObject_1$2, templateObject_2$1;

var FullModal = function (_a) {
    var children = _a.children, title = _a.title, text = _a.text;
    var closeModal = useModal().closeModal;
    return (React.createElement(ContentArea$1, null,
        React.createElement("button", { type: "button", onClick: function () { return closeModal(); } },
            React.createElement(FiX, { size: 20 })),
        React.createElement(Content$1, null,
            React.createElement("h2", null, title),
            React.createElement("p", null, text),
            children)));
};

var appearContainer = keyframes(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"], ["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
var templateObject_1$3;

var Container = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  div {\n    z-index: 1;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  div {\n    z-index: 1;\n  }\n"])));
var Fundo = styled.button(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  animation: ", " 0.2s;\n  border: 0;\n\n  &:focus {\n    outline: thin dotted;\n    outline: 0px auto -webkit-focus-ring-color;\n    outline-offset: 0px;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  animation: ", " 0.2s;\n  border: 0;\n\n  &:focus {\n    outline: thin dotted;\n    outline: 0px auto -webkit-focus-ring-color;\n    outline-offset: 0px;\n  }\n"])), appearContainer);
var templateObject_1$4, templateObject_2$2;

var ModelContainer = function (_a) {
    var newProps = _a.newProps, show = _a.show, data = _a.data;
    var closeModal = useModal().closeModal;
    return (React.createElement(React.Fragment, null, show && (React.createElement(Container, null,
        newProps.type === 'simple' && (React.createElement(SimpleModal, { title: newProps.title, text: newProps.text }, data)),
        newProps.type === 'full' && (React.createElement(FullModal, { title: newProps.title, text: newProps.text }, data)),
        React.createElement(Fundo, { onClick: function () {
                closeModal();
            } })))));
};

var Empty = function () {
    return React.createElement("span", null);
};

var ModalContext = createContext({});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), show = _b[0], setShow = _b[1];
    var _c = useState({}), modal = _c[0], setModal = _c[1];
    var _d = useState(Empty), data = _d[0], setData = _d[1];
    var showModal = useCallback(function (_a) {
        var _b = _a.type, type = _b === void 0 ? 'simple' : _b, _c = _a.data, data = _c === void 0 ? Empty : _c, _d = _a.text, text = _d === void 0 ? '' : _d, _e = _a.title, title = _e === void 0 ? '' : _e;
        setModal({ type: type, text: text, title: title });
        setShow(true);
        setData(data);
    }, []);
    var closeModal = useCallback(function () {
        setModal({ type: '', data: Empty, text: '', title: '' });
        setShow(false);
    }, []);
    return (React.createElement(ModalContext.Provider, { value: { showModal: showModal, closeModal: closeModal } },
        children,
        React.createElement(ModelContainer, { newProps: modal, show: show, data: data })));
};
var useModal = function () {
    var context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

export { ModalProvider, useModal };
