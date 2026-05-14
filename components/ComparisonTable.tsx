import { Check, X } from 'lucide-react';

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr className="bg-gray-50">
            <th className="p-4 border-b border-gray-200 font-bold text-secondary w-1/3">Caractéristiques</th>
            <th className="p-4 border-b border-gray-200 font-bold text-primary w-1/3 text-center border-l">Masque Chirurgical Type IIR</th>
            <th className="p-4 border-b border-gray-200 font-bold text-primary w-1/3 text-center border-l bg-blue-50/50">Masque FFP2</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="p-4 font-medium text-secondary">Niveau de protection</td>
            <td className="p-4 text-center border-l text-gray-600">Protection d&apos;autrui (projections)</td>
            <td className="p-4 text-center border-l font-bold text-secondary bg-blue-50/50">Protection de soi et d&apos;autrui</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="p-4 font-medium text-secondary">Efficacité de filtration (EFB)</td>
            <td className="p-4 text-center border-l text-gray-600">&ge; 99%</td>
            <td className="p-4 text-center border-l text-gray-600 bg-blue-50/50">&ge; 99% (filtration particules fines)</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="p-4 font-medium text-secondary">Résistance aux fluides</td>
            <td className="p-4 text-center border-l text-green-500"><Check className="mx-auto" size={20} /></td>
            <td className="p-4 text-center border-l text-green-500 bg-blue-50/50"><Check className="mx-auto" size={20} /></td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="p-4 font-medium text-secondary">Durée de port recommandée</td>
            <td className="p-4 text-center border-l text-gray-600">4 heures maximum</td>
            <td className="p-4 text-center border-l text-gray-600 bg-blue-50/50">8 heures maximum</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="p-4 font-medium text-secondary">Norme Européenne</td>
            <td className="p-4 text-center border-l text-gray-600">EN 14683:2019+AC:2019</td>
            <td className="p-4 text-center border-l text-gray-600 bg-blue-50/50">EN 149:2001+A1:2009</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="p-4 font-medium text-secondary">Idéal pour</td>
            <td className="p-4 text-center border-l text-gray-600">Usage quotidien, lieux publics, prévention des postillons</td>
            <td className="p-4 text-center border-l text-gray-600 bg-blue-50/50">Milieux clos, forte affluence, périodes d&apos;épidémie (Covid-19, Grippe)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
