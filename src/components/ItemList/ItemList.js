import Item from "../Item/Item";

const ItemList = ({ itemData }) => {
  return (
    <>
    <div className="cardd" style={{ display: "flex", flexWrap: "wrap"}}>
      {itemData.map( (item) => (
        <Item key={item.id} itemData={item}> </Item>
      ))}
    </div>
    </>
  );
};

export default ItemList;


