'use client';
import { Radio, Select } from '@bluewavelabs/prism-ui';
import { useEffect, useState } from 'react';
import { usePlayground } from './context';
import { Request } from '@src/utils/interfaces';

const countries = ['USA', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'Chile'];
const continents = ['North America', 'South America', 'Europe', 'Asia', 'Africa'];

const Nodes = () => {
  const { requestState, setRequestState } = usePlayground();
  const { nodes: option } = requestState;
  const [continent, setContinent] = useState<string>(continents[0]);
  const [country, setCountry] = useState<string>(countries[0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequestState((prev: Request) => ({ ...prev, nodes: e.target.value as 'random' | 'continent' | 'country' }));
  };

  useEffect(() => {
    if (option === 'random') {
      setRequestState((prev: Request) => ({ ...prev, region: '' }));
    } else if (option === 'continent') {
      setRequestState((prev: Request) => ({ ...prev, region: continent }));
    } else if (option === 'country') {
      setRequestState((prev: Request) => ({ ...prev, region: country }));
    }
  }, [continent, country, option]);

  return (
    <div>
      <h2 className="text-xl text-gray-20 mb-6">Manage nodes</h2>
      <label htmlFor="random" className="mb-4 gap-2 flex items-start grow text-sm text-gray-30">
        <Radio checked={option === 'random'} name="node" value="random" id="random" onChange={handleChange} />
        <span>Randomize IPs</span>
      </label>
      <div className="flex md:items-center justify-between flex-col md:flex-row">
        <label htmlFor="continent" className="gap-2 flex items-start grow text-sm text-gray-30 mb-4 md:mb-0">
          <Radio
            checked={option === 'continent'}
            name="node"
            value="continent"
            id="continent"
            onChange={handleChange}
          />
          <span className="max-w-[calc(100%-28px)]">Select from a group of continents</span>
        </label>
        <Select
          selected={continent}
          options={continents}
          onSelect={(val) => setContinent(val)}
          disabled={option !== 'continent'}
        />
      </div>
      <div className="flex md:items-center mt-4 justify-between flex-col md:flex-row">
        <label htmlFor="country" className="gap-2 flex items-start grow text-sm text-gray-30 md:mb-0">
          <Radio checked={option === 'country'} name="node" value="country" id="country" onChange={handleChange} />
          <span className="max-w-[calc(100%-28px)]">Select from a group of countries</span>
        </label>
        <Select
          selected={country}
          options={countries}
          onSelect={(val) => setCountry(val)}
          disabled={option !== 'country'}
        />
      </div>
    </div>
  );
};

export default Nodes;
