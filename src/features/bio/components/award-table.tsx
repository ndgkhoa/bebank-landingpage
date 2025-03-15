import { Table, TableBody, TableCell, TableRow } from '~/components/ui/table';
import useAwardList from '~/features/bio/hooks/use-award-list';

const AwardTable = () => {
  const { data } = useAwardList();

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
