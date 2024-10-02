"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("../../components/Button");
var axios_1 = require("axios");
var react_cookie_1 = require("react-cookie");
var react_router_dom_1 = require("react-router-dom");
var ProfileImg = function () {
    var cookie = new react_cookie_1.Cookies();
    var navigate = react_router_dom_1.useNavigate();
    var imgUrl = '';
    var _a = react_1.useState(''), myToken = _a[0], setMyToken = _a[1];
    var _b = react_1.useState(), myData = _b[0], setMyData = _b[1];
    react_1.useEffect(function () {
        setMyToken(cookie.get("token").replace(/bearer\s+/g, ""));
        try {
            axios_1["default"]
                .get("https://kdt.frontend.5th.programmers.co.kr:5009/auth-user", {
                headers: {
                    Authorization: "bearer " + myToken
                }
            })
                .then(function (res) {
                setMyData(JSON.parse(res.data.fullName));
            });
        }
        catch (err) {
            console.log(err);
            navigate("/");
        }
    }, [cookie]);
    var uploadImg = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var file, formData, response, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!e.target.files) return [3 /*break*/, 1];
                    return [2 /*return*/];
                case 1:
                    file = e.target.files[0];
                    formData = new FormData();
                    formData.append('file', file);
                    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
                    formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY);
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, axios_1["default"].post("https://api.cloudinary.com/v1_1/" + import.meta.env.VITE_CLOUD_NAME + "/upload", formData)];
                case 3:
                    response = _a.sent();
                    imgUrl = response.data.secure_url;
                    putImg(imgUrl);
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var putImg = function (imgUrl) { return __awaiter(void 0, void 0, void 0, function () {
        var putData, submitData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(imgUrl || imgUrl !== '')) return [3 /*break*/, 2];
                    putData = __assign({}, myData);
                    putData.image = imgUrl;
                    submitData = JSON.stringify(putData);
                    return [4 /*yield*/, axios_1["default"]
                            .put("https://kdt.frontend.5th.programmers.co.kr:5009/settings/update-user", {
                            fullName: submitData
                        }, {
                            headers: {
                                Authorization: "bearer " + myToken
                            }
                        })
                            .then(function (res) {
                            if (res.status === 200) {
                                alert("수정 되었습니다.");
                            }
                        })["catch"](function (err) {
                            console.log(err);
                        })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    // const handleImgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //   if (!e.target.files) {
    //     return
    //   } else {
    //     const file = e.target.files[0];
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    //     formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY);
    //     try {
    //       const response = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/upload`, formData);
    //       setImgUrl(response.data.secure_url);
    //     } catch(err) {
    //       console.log(err)
    //     }
    //   }
    // }
    // useEffect(() => {
    //   imgUrlToBinary(imgUrl).then((binaryData) => {
    //     console.log(imgUrl)
    //     console.log(binaryData)
    //     if (binaryData) {
    //       postBinaryImg(binaryData)
    //     }
    //   })
    // }, [imgUrl])
    // const imgUrlToBinary = async (url: string) => {
    //   try {
    //     const response = await axios.get(url, { responseType: 'blob' });
    //     const blob = response.data;
    //     return new Promise((res, rej) => {
    //       const reader = new FileReader();
    //       reader.onloadend = () => res(reader.result);
    //       reader.onerror = rej;
    //       reader.readAsDataURL(blob);
    //     })
    //   } catch (err) {
    //     console.log(err)
    //     return null;
    //   }
    // }
    // const postBinaryImg = async (binaryData: unknown) => {
    //   try {
    //     const response = await axios.post('https://kdt.frontend.5th.programmers.co.kr:5009/users/upload-photo', {
    //       isCover: false,
    //       image: binaryData
    //     }, {
    //         headers: {
    //           Authorization: `bearer ${myToken}`
    //         }
    //       });
    //       console.log(response.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    return (React.createElement("form", { className: "w-140 min-h-screen bg-white p-3 flex flex-col justify-start relative" },
        React.createElement("div", { className: "edit__head-top" },
            React.createElement("p", { className: "font-bold text-xl" }, "\uD504\uB85C\uD544 \uC0AC\uC9C4\uC744 \uB4F1\uB85D\uD574\uC8FC\uC138\uC694."),
            React.createElement("p", { className: "font-normal text-sm mt-2" }, "\uCD5C\uB300 2\uC7A5\uAE4C\uC9C0 \uB4F1\uB85D\uD560 \uC218 \uC788\uC5B4\uC694.")),
        React.createElement("div", { className: "edit__head-btm mt-6" },
            React.createElement("ul", { className: "flex justify-start items-start flex-wrap gap-4" },
                React.createElement("li", { className: "w-[calc(33.33333%_-_1rem)] relative rounded shadow after:block after:pb-100P" },
                    (myData === null || myData === void 0 ? void 0 : myData.image) === '' || !(myData === null || myData === void 0 ? void 0 : myData.image)
                        ? React.createElement("img", { src: "/src/assets/defaultProfileImg.svg", alt: "\uAE30\uBCF8 \uD504\uB85C\uD544 \uC0AC\uC9C4", className: "w-full h-full object-cover absolute" })
                        : React.createElement("img", { src: myData === null || myData === void 0 ? void 0 : myData.image, alt: (myData === null || myData === void 0 ? void 0 : myData.fullName) + "\uB2D8\uC758 \uC0AC\uC9C4", className: "w-full h-full object-cover absolute" }),
                    React.createElement("p", { className: "absolute top-0 right-0 cursor-pointer" }, "\u274C")),
                React.createElement("li", { className: "bg-gray-100 hover:bg-gray-200 w-[calc(33.33333%_-_1rem)] relative rounded shadow after:block after:pb-100P" },
                    React.createElement("label", { htmlFor: "imgUploadInput", className: "w-full h-full absolute flex justify-center items-center cursor-pointer" },
                        React.createElement("p", { className: "text-greenColor font-bold text-xl" }, "+ \uC0AC\uC9C4 \uC5C5\uB85C\uB4DC")),
                    React.createElement("input", { type: "file", name: "", id: "imgUploadInput", className: "hidden", accept: "image/jpeg, image/png, image/webp", onChange: uploadImg })))),
        React.createElement("div", { className: "text-center absolute bottom-8 w-[calc(100%_-_1.5rem)]" },
            React.createElement(Button_1["default"], { label: "\uC800\uC7A5", size: "full", color: "green" }))));
};
exports["default"] = ProfileImg;
