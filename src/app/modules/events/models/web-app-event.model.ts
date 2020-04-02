export interface WebAppEvent {
  id: string;
  action: string;
  label: string;
  component: {
    name: string;
    parentName: string;
    innerText: string;
    innerHTML: string;
    styles: object;
  };
  page: {
    url: string;
    location: string;
  };
  time: number;
  user: {
    id: string;
    email: string;
  };
  data: object;
  sessionToken: string;
}
