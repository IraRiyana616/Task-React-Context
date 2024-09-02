import { MyContext } from '/src/App';
import { useContext } from 'react';

const Child = () => {
  const { data, setData } = useContext(MyContext);

  return (
    <div>
      Child
      {/* Mengakses data dari context */}
      {data.map((item, index) => (
        <div key={index}>
          <p>Nama: {item.nama}</p>
          <p>Kota: {item.kota}</p>
          <p>Hobby: {item.hobby}</p>
          <hr />
        </div>
      ))}
      <button
        onClick={() =>
          setData((prevData) => [
            ...prevData,
            {
              nama: 'Ira Riyana Sari Siregar',
              kota: 'Samarinda',
              hobby: 'Badminton',
            },
          ])
        }>
        Tambah Data
      </button>
    </div>
  );
};
export default Child;
