export type Car = {
    "Fuel Type": string;
    Marca: string;
    Price: number;
    "Image URL": string;
    Active: boolean;
    Modelo: string;
    Slug: string;
  };



  export interface Thumbnail {
    url: string;
    width: number;
    height: number;
  }
  
  export interface Slide {
    id: string;
    width: number;
    height: number;
    url: string;
    filename: string;
    size: number;
    type: string;
    thumbnails: {
      small: Thumbnail;
      large: Thumbnail;
      full: Thumbnail;
    };
  }
  
  export interface VehicleFields {
    brand: string;
    model: string;
    price: number;
    fuel: string;
    year: number;
    featured_vehicle: boolean;
    description: string;
    features: string;
    image_url: string;
    slide: Slide[];
    slug: string;
    technical_sheet: string;
  }
  
  export interface Vehicle {
    id: number;
    fields: VehicleFields;
  }
  
  export type ApiResponse = Vehicle[];