import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import useAwardData from '@/hooks/useAwardData';

const AwardTable = () => {
  const { data } = useAwardData();

  return (
    <Table className="w-3/4">
      <TableBody>
        {data.map((award, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">/{index + 1}</TableCell>
            <TableCell>{award.competition}</TableCell>
            <TableCell>{award.prize}</TableCell>
            <TableCell>{award.project}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AwardTable;
