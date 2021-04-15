import ReactWeather, { useOpenWeather } from 'react';

const App = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'b2cc5e832a0d6c24754dbe805eaa5103',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

export default App;
