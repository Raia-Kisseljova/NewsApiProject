import React, { ReactNode } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { CellContext } from "@tanstack/react-table";
import { Article } from "@/types/Article";
import BTable from "react-bootstrap/Table";

export const ReactTable = ({ data }: { data: Article[] }) => {
  const columnHelper = createColumnHelper<Article>();

  const columns = [
    columnHelper.accessor((row) => row.title, {
      id: "title",
      cell: (info: CellContext<Article, ReactNode>) => <i>{info.getValue()}</i>,
      header: () => <span>Title</span>,
    }),
    columnHelper.accessor("source.name", {
      header: () => "Source",
      cell: (info: CellContext<Article, ReactNode>) => info.renderValue(),
    }),
    columnHelper.accessor("publishedAt", {
      header: () => <span>Published </span>,
      cell: (info: CellContext<Article, ReactNode>) => (
        <p className="publishedAt">
          {(info.renderValue() as string).slice(0, 10)}
        </p>
      ),
    }),

    columnHelper.accessor("url", {
      header: () => <span className="read-more">Read more </span>,
      cell: (info: CellContext<Article, ReactNode>) => (
        <p className="read-more">
          <a href={info.row.original.url}>Read more</a>
        </p>
      ),
    }),
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return data.length === 0 ? (
    <p className="mt-3 text-center">No articles found</p>
  ) : (
    <>
      <div className="p-2">
        <h4 className="text-center mt-2 mb-4 text-light">
          Articles for the last month
        </h4>

        <BTable bordered responsive className="text-light">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <>
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  </>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </BTable>
      </div>
    </>
  );
};
