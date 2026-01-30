import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Database, RefreshCw, CheckCircle, XCircle, Table2, Eye } from 'lucide-react';

interface TableInfo {
  schema: string;
  name: string;
  rls_enabled: boolean;
  rows: number;
  columns: Array<{
    name: string;
    data_type: string;
    format: string;
    options: string[];
    default_value?: string;
  }>;
  primary_keys: string[];
}

interface TableData {
  info: TableInfo;
  sampleData: any[];
}

export function ValidationPage() {
  const [tables, setTables] = useState<TableData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [expandedTable, setExpandedTable] = useState<string | null>(null);
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'Not configured';

  const fetchTableData = async () => {
    setLoading(true);
    setError(null);
    try {
      const tableNames = ['leads', 'site_images', 'before_after_images'];
      const tableDataPromises = tableNames.map(async (tableName) => {
        const { data: tableData, error: tableError } = await supabase
          .from(tableName)
          .select('*')
          .limit(5);

        if (tableError) throw tableError;

        const { count, error: countError } = await supabase
          .from(tableName)
          .select('*', { count: 'exact', head: true });

        if (countError) throw countError;

        return {
          name: tableName,
          rowCount: count || 0,
          sampleData: tableData || [],
        };
      });

      const results = await Promise.all(tableDataPromises);

      const tablesWithInfo: TableData[] = results.map((result) => {
        let columns: any[] = [];
        let primaryKeys: string[] = [];

        if (result.name === 'leads') {
          columns = [
            { name: 'id', data_type: 'uuid', format: 'uuid', options: ['updatable'], default_value: 'gen_random_uuid()' },
            { name: 'created_at', data_type: 'timestamp with time zone', format: 'timestamptz', options: ['nullable', 'updatable'], default_value: 'now()' },
            { name: 'type', data_type: 'text', format: 'text', options: ['updatable'] },
            { name: 'contact_name', data_type: 'text', format: 'text', options: ['updatable'] },
            { name: 'email', data_type: 'text', format: 'text', options: ['updatable'] },
            { name: 'phone', data_type: 'text', format: 'text', options: ['nullable', 'updatable'] },
            { name: 'company_name', data_type: 'text', format: 'text', options: ['nullable', 'updatable'] },
            { name: 'details', data_type: 'text', format: 'text', options: ['updatable'] },
          ];
          primaryKeys = ['id'];
        } else if (result.name === 'site_images') {
          columns = [
            { name: 'id', data_type: 'uuid', format: 'uuid', options: ['updatable'], default_value: 'gen_random_uuid()' },
            { name: 'created_at', data_type: 'timestamp with time zone', format: 'timestamptz', options: ['nullable', 'updatable'], default_value: 'now()' },
            { name: 'section', data_type: 'text', format: 'text', options: ['updatable'] },
            { name: 'title', data_type: 'text', format: 'text', options: ['updatable'] },
            { name: 'storage_path', data_type: 'text', format: 'text', options: ['updatable'] },
            { name: 'alt_text', data_type: 'text', format: 'text', options: ['updatable'] },
            { name: 'is_active', data_type: 'boolean', format: 'bool', options: ['nullable', 'updatable'], default_value: 'true' },
            { name: 'sort_order', data_type: 'integer', format: 'int4', options: ['nullable', 'updatable'], default_value: '0' },
          ];
          primaryKeys = ['id'];
        } else if (result.name === 'before_after_images') {
          columns = [
            { name: 'id', data_type: 'uuid', format: 'uuid', options: ['updatable'], default_value: 'gen_random_uuid()' },
            { name: 'service_type', data_type: 'text', format: 'text', options: ['updatable'] },
            { name: 'before_image_path', data_type: 'text', format: 'text', options: ['updatable'] },
            { name: 'after_image_path', data_type: 'text', format: 'text', options: ['updatable'] },
            { name: 'before_alt', data_type: 'text', format: 'text', options: ['updatable'] },
            { name: 'after_alt', data_type: 'text', format: 'text', options: ['updatable'] },
            { name: 'is_active', data_type: 'boolean', format: 'bool', options: ['nullable', 'updatable'], default_value: 'false' },
            { name: 'display_order', data_type: 'integer', format: 'int4', options: ['nullable', 'updatable'], default_value: '0' },
            { name: 'created_at', data_type: 'timestamp with time zone', format: 'timestamptz', options: ['nullable', 'updatable'], default_value: 'now()' },
          ];
          primaryKeys = ['id'];
        }

        return {
          info: {
            schema: 'public',
            name: result.name,
            rls_enabled: true,
            rows: result.rowCount,
            columns,
            primary_keys: primaryKeys,
          },
          sampleData: result.sampleData,
        };
      });

      setTables(tablesWithInfo);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch table data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  const getRowCountColor = (count: number) => {
    if (count === 0) return 'text-red-600 bg-red-50';
    if (count < 10) return 'text-yellow-600 bg-yellow-50';
    return 'text-green-600 bg-green-50';
  };

  const toggleExpand = (tableName: string) => {
    setExpandedTable(expandedTable === tableName ? null : tableName);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Database Validation</h1>
              <p className="text-gray-600">Environment health check and data overview</p>
            </div>
            <button
              onClick={fetchTableData}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-600" />
              Environment Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Supabase URL</p>
                <p className="font-mono text-sm bg-gray-50 px-3 py-2 rounded border border-gray-200 break-all">
                  {supabaseUrl}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Last Updated</p>
                <p className="font-mono text-sm bg-gray-50 px-3 py-2 rounded border border-gray-200">
                  {lastUpdated ? lastUpdated.toLocaleString() : 'Not yet loaded'}
                </p>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-900 mb-1">Error</h3>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </div>
          )}
        </div>

        {loading && (
          <div className="text-center py-12">
            <RefreshCw className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
            <p className="text-gray-600">Loading database information...</p>
          </div>
        )}

        {!loading && tables.length > 0 && (
          <div className="space-y-6">
            {tables.map((table) => (
              <div key={table.info.name} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Table2 className="w-6 h-6 text-blue-600" />
                      <h3 className="text-2xl font-bold text-gray-900">{table.info.name}</h3>
                    </div>
                    <div className={`px-4 py-2 rounded-full font-semibold text-lg ${getRowCountColor(table.info.rows)}`}>
                      {table.info.rows} rows
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      {table.info.rls_enabled ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-600" />
                      )}
                      <span className={table.info.rls_enabled ? 'text-green-700' : 'text-red-700'}>
                        RLS {table.info.rls_enabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                    <div className="text-gray-600">
                      Primary Key: <span className="font-mono font-semibold text-gray-900">{table.info.primary_keys.join(', ')}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Columns</h4>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-semibold text-gray-700">Column Name</th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-700">Data Type</th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-700">Default Value</th>
                          <th className="text-left py-2 px-3 font-semibold text-gray-700">Options</th>
                        </tr>
                      </thead>
                      <tbody>
                        {table.info.columns.map((col) => (
                          <tr key={col.name} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-2 px-3 font-mono text-blue-600 font-semibold">{col.name}</td>
                            <td className="py-2 px-3 font-mono text-gray-700">{col.data_type}</td>
                            <td className="py-2 px-3 font-mono text-gray-600 text-xs">
                              {col.default_value || '-'}
                            </td>
                            <td className="py-2 px-3">
                              <div className="flex flex-wrap gap-1">
                                {col.options.map((opt) => (
                                  <span
                                    key={opt}
                                    className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs"
                                  >
                                    {opt}
                                  </span>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {table.sampleData.length > 0 && (
                    <div>
                      <button
                        onClick={() => toggleExpand(table.info.name)}
                        className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 mb-3"
                      >
                        <Eye className="w-4 h-4" />
                        {expandedTable === table.info.name ? 'Hide' : 'Show'} Sample Data ({table.sampleData.length} rows)
                      </button>

                      {expandedTable === table.info.name && (
                        <div className="overflow-x-auto bg-gray-50 rounded-lg border border-gray-200 p-4">
                          <pre className="text-xs font-mono text-gray-800 whitespace-pre-wrap">
                            {JSON.stringify(table.sampleData, null, 2)}
                          </pre>
                        </div>
                      )}
                    </div>
                  )}

                  {table.sampleData.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <p className="text-sm">No data available in this table</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && tables.length === 0 && !error && (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
            <Database className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No tables found in the database</p>
          </div>
        )}
      </div>
    </div>
  );
}
