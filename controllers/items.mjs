export default function initItemsController(db) {
  const index = async (request, response) => {
   try {
     const items = await db.Item.findAll();
     console.log('items', items);
     response.send({items});
   }
    catch {
      console.log('error');
    }
  };

  return {
    index,
  };
}
