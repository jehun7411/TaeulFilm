import React, { useEffect } from "react";
const { kakao } = window;

function Location() {
  useEffect(() => {
    const container = document.getElementById("map");

    const taeulPosition = new kakao.maps.LatLng(
      37.35890230841806,
      126.93319406963435
    );

    const options = {
      center: taeulPosition,
      level: 2,
    };

    const map = new kakao.maps.Map(container, options);
    const marker = new kakao.maps.Marker({
      position: taeulPosition,
    });

    marker.setMap(map);

    const iwContent =
      "<div style='width:150px; height:25px; text-align:center; font-weight:500; font-size:.9rem; line-height:20px; background-color:#343a40; color:#eee;'>태을필름앤</div>";

    const infowindow = new kakao.maps.InfoWindow({
      map,
      position: taeulPosition,
      content: iwContent,
    });

    infowindow.open(map, marker);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "443px" }}></div>
    </div>
  );
}

export default Location;
