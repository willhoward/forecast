import React from 'react';
import PropTypes from 'prop-types';
import Field from './field';
import Spacer from './spacer';
import Card from './card';

const Report = ({ report, onChange, onSubmit, onReset }) => {
  const score = report.ruleGroups.SPEED.score;
  const rules = report.formattedResults.ruleResults;

  return (
    <div className="flex">
      <div className="space">
        <form onSubmit={onSubmit}>
          <div className="flex">
            <div className="item">
              <button className="square" type="button" onClick={onReset}>
                <img src="icons/left.svg" alt="Reset" />
              </button>
            </div>
            <div className="space">
              <Field id="target" label="Your website address" onChange={onChange} />
            </div>
            <div className="item">
              <button className="square" type="submit">
                <img src="icons/search.svg" alt="Go" />
              </button>
            </div>
          </div>
        </form>
        <Spacer size="medium" />
        <h1 className="wrap">Your forecast for &#8216;{report.title}&#8217;</h1>
        <p>With data from Google PageSpeed Insights</p>
        <Spacer size="medium" />
        <Card>
          <h2>{score}</h2>
          <p>Overall performance score. <a>What&#8217;s this</a>?</p>
        </Card>
        <Spacer size="medium" />
        <h1>Performance Breakdown</h1>
        <Spacer size="medium" />
        <Card>
          <table>
            <tbody>
              <tr>
                <td>
                  <p>Avoid landing page redirects</p>
                </td>
                <td>
                  <p>{Math.round(rules.AvoidLandingPageRedirects.ruleImpact)}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Enable gzip compression</p>
                </td>
                <td>
                  <p>{Math.round(rules.EnableGzipCompression.ruleImpact)}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Leverage browser caching</p>
                </td>
                <td>
                  <p>{Math.round(rules.LeverageBrowserCaching.ruleImpact)}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Main resource server response time</p>
                </td>
                <td>
                  <p>{Math.round(rules.MainResourceServerResponseTime.ruleImpact)}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Minify CSS</p>
                </td>
                <td>
                  <p>{Math.round(rules.MinifyCss.ruleImpact)}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Minify HTML</p>
                </td>
                <td>
                  <p>{Math.round(rules.MinifyHTML.ruleImpact)}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Minify Javascript</p>
                </td>
                <td>
                  <p>{Math.round(rules.MinifyJavaScript.ruleImpact)}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Minimise render-blocking resources</p>
                </td>
                <td>
                  <p>{Math.round(rules.MinimizeRenderBlockingResources.ruleImpact)}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Optimise images</p>
                </td>
                <td>
                  <p>{Math.round(rules.OptimizeImages.ruleImpact)}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Prioritise visible content</p>
                </td>
                <td>
                  <p>{Math.round(rules.PrioritizeVisibleContent.ruleImpact)}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

Report.propTypes = {
  report: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Report;
