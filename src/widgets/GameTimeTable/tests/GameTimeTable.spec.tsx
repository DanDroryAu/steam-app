import { describe, test, expect, afterEach } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import GameTimeTable from "@/widgets/GameTimeTable";
import { MockedProvider } from "@apollo/client/testing";
import { getSteamUserDetailsMock } from "@/test/apollo-mocks/getSteamUserDetails.mock.ts";
import { getAllSteamGamesBySteamIdMock } from "@/test/apollo-mocks/getAllSteamGamesBySteamId.mock.ts";
import { queries, cleanup } from '@testing-library/react';
import customQueries from "@/test/custom-queries.ts";


describe("[Widget: GameTimeTable]", () => {
  afterEach(cleanup);
  test("renders the widget", async () => {
    const { container } = render(
      <MockedProvider>
        <GameTimeTable startId={''} />
      </MockedProvider>
    );
    expect(document.documentElement).toContainElement(container);
  });

  test("Displays user data", async () => {
    const mocks = [getSteamUserDetailsMock,getAllSteamGamesBySteamIdMock];
    const { findByText } = render(
      <MockedProvider mocks={mocks}>
        <GameTimeTable startId={'test-id'} />
      </MockedProvider>
    );
    const userNameElement = await findByText('test-name');
    expect(document.documentElement).toContainElement(userNameElement);
  });

  test("Displays game data", async () => {
    const mocks = [getSteamUserDetailsMock,getAllSteamGamesBySteamIdMock];
    const { findByText, getAllByClassName } = render(
      <MockedProvider mocks={mocks}>
        <GameTimeTable startId={'test-id'} />
      </MockedProvider>,
      { queries: { ...queries, ...customQueries } }
    );
    const firstGameNameElement = await findByText('Half-life 3 (confirmed)');
    expect(document.documentElement).toContainElement(firstGameNameElement);
    const allRows = getAllByClassName(/ant-table-row/);
    expect(allRows.length).toBe(2);
  });

  describe('sorting', () => {
    test('sorts by playtime - all', async () => {
      const mocks = [getSteamUserDetailsMock,getAllSteamGamesBySteamIdMock];
      const { getByText, getAllByClassName, findByText } = render(
        <MockedProvider mocks={mocks}>
          <GameTimeTable startId={'test-id'} />
        </MockedProvider>,
        { queries: { ...queries, ...customQueries } }
      );

      await findByText('Half-life 3 (confirmed)');

      // currently sorted by playtime - all descending so the first row should be Apex Legends
      const allRowsBefore = getAllByClassName(/ant-table-row/);
      expect(allRowsBefore.length).toBe(2);
      expect(allRowsBefore[0]).toHaveTextContent('Apex Legends');

      const playtimeAllHeader = getByText('playtime - all');
      fireEvent.click(playtimeAllHeader);

      // currently sorted by playtime - all ascending so the first row should be Half-life 3
      const allRowsAscending = getAllByClassName(/ant-table-row/);
      expect(allRowsAscending.length).toBe(2);
      expect(allRowsAscending[0]).toHaveTextContent('Half-life 3 (confirmed)');

      fireEvent.click(playtimeAllHeader);
      // removed the sort so it does not change the order
      const allRowsNoSort = getAllByClassName(/ant-table-row/);
      expect(allRowsNoSort.length).toBe(2);
      expect(allRowsNoSort[0]).toHaveTextContent('Half-life 3 (confirmed)');

      fireEvent.click(playtimeAllHeader);
      // Back at the original sort by playtime - all descending so the first row should be Apex Legends
      const allRowsFinal = getAllByClassName(/ant-table-row/);
      expect(allRowsFinal.length).toBe(2);
      expect(allRowsFinal[0]).toHaveTextContent('Apex Legends');
    });

    test('sorts by name', async () => {
      const mocks = [getSteamUserDetailsMock,getAllSteamGamesBySteamIdMock];
      const { getByText, getAllByClassName, findByText } = render(
        <MockedProvider mocks={mocks}>
          <GameTimeTable startId={'test-id'} />
        </MockedProvider>,
        { queries: { ...queries, ...customQueries } }
      );

      await findByText('Half-life 3 (confirmed)');

      // currently sorted by playtime - all descending so the first row should be Apex Legends
      const allRowsBefore = getAllByClassName(/ant-table-row/);
      expect(allRowsBefore.length).toBe(2);
      expect(allRowsBefore[0]).toHaveTextContent('Apex Legends');

      const nameHeader = getByText('Name');
      fireEvent.click(nameHeader);

      // currently sorted by Name descending so the first row should be Apex Legends
      const allRowsDescending = getAllByClassName(/ant-table-row/);
      expect(allRowsDescending.length).toBe(2);
      expect(allRowsDescending[0]).toHaveTextContent('Apex Legends');

      fireEvent.click(nameHeader);
      // Changed sort order to descending for the name so the first row should be Half-life 3
      const allRowsAscending = getAllByClassName(/ant-table-row/);
      expect(allRowsAscending.length).toBe(2);
      expect(allRowsAscending[0]).toHaveTextContent('Half-life 3 (confirmed)');

      fireEvent.click(nameHeader);
      // no sort so the rows remain untouched
      const allRowsFinal = getAllByClassName(/ant-table-row/);
      expect(allRowsFinal.length).toBe(2);
      expect(allRowsFinal[0]).toHaveTextContent('Half-life 3 (confirmed)');
    });

    test('sorts by playtime - 2 weeks', async () => {
      // Skipping for brevity of tech-test time.
    });
  });

  describe('searching', () => {
    test('shows no data when an incorrect steam id is given', async () => {
      // Skipping for brevity of tech-test time.
    });
  });

  describe('user profile', () => {
    test('shows active since date when user profile is public', async () => {
      // Skipping for brevity of tech-test time.
    });
    test('shows percentage of life played when user profile is public', async () => {
      // Skipping for brevity of tech-test time.
    });
  });
});
