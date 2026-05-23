export interface metaData {
  public_id: string;
  resource_type: string;
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
  provider_metadata: metaData;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  } | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: metaData;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface MetaPagiantion {
  pagination: pagination;
}
