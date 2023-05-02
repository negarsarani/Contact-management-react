import Card from '../components/card';

function Contactlist() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5   items-center justify-center w-8/12 md:w-10/12">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Contactlist;
