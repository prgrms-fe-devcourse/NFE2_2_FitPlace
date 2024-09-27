import React from "react";

const Health_post = ({ title, channel_name }) => {
  let titleObject;
  try {
    // 이중 파싱: 이스케이프된 문자열을 먼저 일반 문자열로 변환 후 JSON 파싱
    titleObject = JSON.parse(title);
    console.log("parsing", titleObject);
  } catch (error) {
    console.error("JSON 파싱 오류:", error);
    titleObject = {};
  }

  return (
    <button className="bg-gray-100 h-32 w-full rounded-md shadow-lg mb-5 p-5 flex flex-col transition-transform duration-300 ease-in-out hover:bg-gray-200 hover:shadow-xl">
      <p className="font-bold text-lg mb-3">
        {titleObject.title || "제목 없음"}
      </p>
      <div className="mb-2 text-sm flex">
        <p className="text-lime-400 font-bold">모집 중!</p>
        <span className="mx-3 opacity-5">|</span>
        2024.09.13 19:00 ~ 20:00
      </div>
      <div className="text-sm flex">
        양재 시민의 숲역
        <span className="mx-3 opacity-5">|</span>
        {titleObject.meetingCapacity || 0}명 / 6명
        <span className="mx-3 opacity-5">|</span>
        {channel_name || titleObject.channel}
      </div>
    </button>
  );
};

export default Health_post;
