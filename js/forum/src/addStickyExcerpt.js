import { extend } from 'flarum/extend';
import DiscussionList from 'flarum/components/DiscussionList';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import { truncate } from 'flarum/utils/string';

export default function addStickyControl() {
  extend(DiscussionList.prototype, 'requestParams', function(params) {
    params.include.push('startPost');
  });

  extend(DiscussionListItem.prototype, 'infoItems', function(items) {
  });
}
