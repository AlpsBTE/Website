/* eslint-disable*/
import './gallery.scss';
import { PageTitle } from '@alpsbte/shared/components';
import React from 'react';
import { inject, observer } from 'mobx-react';
import { languageStore } from '@alpsbte/shared/stores';
import { tr } from '@alpsbte/shared/language';

export interface GalleryProps {}

export const Gallery: React.FC = inject(languageStore.storeKey)(
  observer(({}: GalleryProps) => {
    return (
      <div>
        <PageTitle
          title={tr('pages.gallery.title')}
          subtitle={tr('pages.gallery.description')}
        />
        <div className="gallery__container">
          <div className="gallery__image-container">
            <img
              src={
                'https://images.unsplash.com/photo-1634055614116-3a96869e21ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
              }
              className="gallery__image"
            ></img>
            <img
              src={
                'https://images.unsplash.com/photo-1634055614116-3a96869e21ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
              }
              className="gallery__image"
            ></img>
            <img
              src={
                'https://images.unsplash.com/photo-1634055614116-3a96869e21ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
              }
              className="gallery__image"
            ></img>
            <img
              src={
                'https://images.unsplash.com/photo-1634055614116-3a96869e21ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
              }
              className="gallery__image"
            ></img>
            <img
              src={
                'https://images.unsplash.com/photo-1634055614116-3a96869e21ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
              }
              className="gallery__image"
            ></img>
            <img
              src={
                'https://images.unsplash.com/photo-1634055614116-3a96869e21ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
              }
              className="gallery__image"
            ></img>
            <img
              src={
                'https://images.unsplash.com/photo-1634055614116-3a96869e21ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
              }
              className="gallery__image"
            ></img>
            <img
              src={
                'https://images.unsplash.com/photo-1634055614116-3a96869e21ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
              }
              className="gallery__image"
            ></img>
            <img
              src={
                'https://images.unsplash.com/photo-1634055614116-3a96869e21ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
              }
              className="gallery__image"
            ></img>
          </div>
        </div>
      </div>
    );
  })
);

export default Gallery;
