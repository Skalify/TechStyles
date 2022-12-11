import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  AddItemCard,
  ButtonAddItem,
  ImageRelatedProduct,
  RelatedProductContainer,
} from '../lib/styledComponents';
import ProductCardYourOutfit from './ProductCardYourOutfit.jsx';

const YourOutfit = () => {
  // state for outfit items
  const [outfitItems, setOutfitItems] = useState([]);
  const {
    productId,
    productInfo,
    productStyles,
  } = useSelector((state) => state.product);
  useEffect(() => {
    // get data in local storage at key outfits
    const dataLocalStorage = localStorage.getItem('outfits');
    // if there is data assign it to outfitItems
    if (dataLocalStorage !== null) {
      // assign array of outfit items to outfits
      setOutfitItems(JSON.parse(dataLocalStorage));
    }
  }, []);
  // handles button and adds item to local storage
  const addItem = () => {
    const ItemObject = {
      product_id: productInfo.id,
      name: productInfo.name,
      category: productInfo.category,
      styles: productStyles.results,
    };
    // check if item already present in outfits items
    if (outfitItems.length > 0) {
      console.log('>0');
      console.log('outfititem length: ', outfitItems.length);
      for (let i = 0; i < outfitItems.length; i += 1) {
        console.log(typeof outfitItems[i].product_id.toString(), typeof productId);
        if (outfitItems[i].product_id.toString() === productId) {
          console.log('true');
          break;
        } else if (i === outfitItems.length - 1) {
          setOutfitItems([...outfitItems, ItemObject]);
          localStorage.setItem('outfits', JSON.stringify([...outfitItems, ItemObject]));
        }
      }
    } else if (outfitItems.length === 0) {
      console.log('0');
      localStorage.setItem('outfits', JSON.stringify([ItemObject]));
      setOutfitItems([...outfitItems, ItemObject]);
    }
  };
  return (
    <div>
      Your Outfit
      <RelatedProductContainer>
        <div className="card">
          {/* when clicked add main item to local storage */}
          <ButtonAddItem type="button" onClick={addItem}>Add Current Item To Your Outfit</ButtonAddItem>
        </div>
        {outfitItems.map(
          (item, idx) => (
            <ProductCardYourOutfit
              outfitItem={item}
              key={Math.random(69 * idx) * 3}
              setOutfitItems={setOutfitItems}
              outfitItems={outfitItems}
              idxOfItem={idx}
            />
          ),
        )}
      </RelatedProductContainer>
    </div>
  );
};

export default YourOutfit;