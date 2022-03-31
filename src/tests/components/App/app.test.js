// src/__tests__/App.test.tsx
import { cleanup, render, screen, crea } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import { Rooms } from "../../../components/rooms/Rooms";
import { UsersDataTable } from '../../../components/users/UsersDataTable';
import Header from "../../../components/commons/Layout/Header";
import React from 'react';


afterEach(cleanup);

const users_data_empty = [];
const users_data = [{
  "Id": {
    "$oid": "623ceccdfc13ae532c0000e1"
  },
  "Name": "Felike Cinnamond",
  "Contact": "638-903-9068",
  "Status": false
}, {
  "Id": {
    "$oid": "623ceccdfc13ae532c0000e2"
  },
  "Name": "Sutton Caesman",
  "Contact": "368-519-7252",
  "Status": false
}, {
  "Id": {
    "$oid": "623ceccdfc13ae532c0000e3"
  },
  "Name": "Evangeline Baxster",
  "Contact": "478-174-4659",
  "Status": true
}]
const isLogged = true;
const onLogOut = () => {};

describe("Testing Components", () => {
  test("<Rooms /> must show 'ROOMS COMPONENT' in the document", () => {
    render(<Rooms />);

    expect(screen.getByText('ROOMS COMPONENT')).toBeInTheDocument();
  });

  test("<UsersDataTable /> must show a table if users exist in DB", () => {
      
      render (<UsersDataTable userData={users_data} />);

      expect(screen.getByRole('table')).toBeInTheDocument();
  });

  test("<UsersDataTable /> must show message 'empty users' if users doesnt exist", () => {
    render (<UsersDataTable userData={users_data_empty} />);

    expect(screen.getByText('No users in database')).toBeInTheDocument()
  });

  test("<Header /> must show five 'a' elements is user is logged", () => {
    render(<Router><Header isLogged={isLogged} onLogOut={onLogOut} /></Router> );

    const links = screen.getAllByRole('link');

    expect(links.length).toBe(5);
  })

  test("<Header /> must show two 'a' elements is user isn't logged", () => {
    render(<Router><Header isLogged={!isLogged} onLogOut={onLogOut} /></Router> );

    // const links = screen.getAllByRole('link');
    const links = screen.getAllByRole('link');

    expect(links.length).toBe(2);
  })

});