import UseFetch from "../useFetch/UseFetch";

const Location = () => {
  const { data: ipData, loading, error } = UseFetch("http://ip-api.com/json");

  return (
    <div>
      <h1>IP Geolocation Information</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          <p>Your IP Address: {ipData?.ip}</p>
          <p>
            Location: {ipData?.city}, {ipData?.region}, {ipData?.country_name}
          </p>
          <p>Latitude: {ipData?.latitude}</p>
          <p>Longitude: {ipData?.longitude}</p>
          <p>ISP: {ipData?.isp}</p>
        </div>
      )}
    </div>
  );
};

export default Location;
