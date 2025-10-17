import { azureVsLegacy } from '../data/content';
import './Pages.css';

const AzureVsLegacy = () => {
  return (
    <div className="page">
      <h1>Azure vs Legacy Quick Reference</h1>
      <p>Use this guide to determine which deployment model story to tell and key messaging.</p>

      <div className="card">
        <h2>Deployment Model Decision Tree</h2>
        <table>
          <thead>
            <tr>
              <th>Customer Type</th>
              <th>Model</th>
              <th>Story</th>
            </tr>
          </thead>
          <tbody>
            {azureVsLegacy.decisionTree.map((row, i) => (
              <tr key={i}>
                <td>{row.customerType}</td>
                <td><span className={`badge ${row.model === 'AZURE' ? 'badge-azure' : 'badge-legacy'}`}>{row.model}</span></td>
                <td>{row.story}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3 className="azure-title">Azure Story</h3>
          <p><strong>Locations:</strong> {azureVsLegacy.azureStory.locations}</p>
          <p><strong>Message:</strong> "{azureVsLegacy.azureStory.message}"</p>
          <p><strong>Emphasis:</strong> {azureVsLegacy.azureStory.emphasis}</p>
        </div>

        <div className="card">
          <h3 className="legacy-title">Legacy Story</h3>
          <p><strong>Locations:</strong> {azureVsLegacy.legacyStory.locations}</p>
          <p><strong>Message:</strong> "{azureVsLegacy.legacyStory.message}"</p>
          <p><strong>Emphasis:</strong> {azureVsLegacy.legacyStory.emphasis}</p>
        </div>
      </div>
    </div>
  );
};

export default AzureVsLegacy;
